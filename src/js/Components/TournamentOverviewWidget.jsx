import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { coreLibrary } from 'kambi-widget-core-library'
import { ScrolledList, BlendedBackground } from 'kambi-widget-components'

import mobile from '../Services/mobile'
import kambi from '../Services/kambi'
import styles from './TournamentOverviewWidget.scss'
import { widgetModule, translationModule } from 'kambi-widget-core-library'

import Event from './Event'
import ArrowButton from './ArrowButton'
import ItemContainer from './ItemContainer'
import TournamentLogo from './TournamentLogo'
import List from './List'
import ListItem from './ListItem'

/**
 * How long (in milliseconds) to wait before scrolling league logo out
 * @type {number}
 */
const MOBILE_INITIAL_SCROLL_DELAY = 2000
const WORLD_CUP_2018_ID = 2000075007
const DEFAULT_BACKGROUND =
  'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg'

const t = translationModule.getTranslation.bind(translationModule)

class TournamentOverviewWidget extends Component {
  /**
   * Constructs.
   * @param {object} props Component properties
   */
  constructor(props) {
    super(props)

    this.state = {
      events: props.events,
      leftWidget: props.competitions.leftWidget,
      rightWidget: props.competitions.rightWidget,
      selected: 0,
      mobile: mobile(),
      usingDefaultBackground: props.backgroundUrl === DEFAULT_BACKGROUND,
    }
    this.pollEventTimer = null
  }

  /**
   * Called after component rendering to DOM.
   */
  componentDidMount() {
    if (mobile()) {
      setTimeout(
        () => this.setState({ selected: 1 }),
        MOBILE_INITIAL_SCROLL_DELAY
      )
    }
    const { height } = coreLibrary.rootElement.getBoundingClientRect()
    widgetModule.setWidgetHeight(height)
    this.startPollTimer()
  }

  componentWillUnmount() {
    clearTimeout(this.pollEventTimer)
  }

  /**
   * sets a timeout to poll more event data every minute
   */
  startPollTimer() {
    this.pollEventTimer = setTimeout(() => this.pollEventData(), 60000)
  }

  /**
   * gets event data and updates widget on success
   */
  pollEventData() {
    clearTimeout(this.pollEventTimer)

    const { filter, leftWidgetInput, rightWidgetInput } = coreLibrary.args

    kambi
      .getEvents(filter, leftWidgetInput, rightWidgetInput)
      .then(res => {
        const { events, competitions } = res
        this.setState(
          {
            events,
            leftWidget: competitions.leftWidget,
            rightWidget: competitions.rightWidget,
          },
          () => {
            this.startPollTimer()
          }
        )
      })
      .catch(err => {
        console.error(err)
        widgetModule.removeWidget(err)
      })
  }

  /**
   * Generates country icon url
   * country { string } country name e.g 'Sweden', 'South Korea'
   */
  generateCountryFlagUrl(country) {
    const normalisedCountryName = country.toLowerCase().replace(/\s/g, '_')
    return `${this.props.flagBaseUrl}${normalisedCountryName}.svg`
  }

  /**
   * Navigates to event
   * event { shape } event containing betOffer and event metadata
   */
  navigateToEvent(event) {
    if (event.liveBetOffers) {
      // Navigate to live event
      // http://kambi-sportsbook-widgets.github.io/widget-core-library/module-widgetModule.html#.navigateToLiveEvent__anchor
      widgetModule.navigateToLiveEvent(event.id)
    } else {
      // Navigate to upcoming event
      // http://kambi-sportsbook-widgets.github.io/widget-core-library/module-widgetModule.html#.navigateToEvent__anchor
      widgetModule.navigateToEvent(event.id)
    }
  }

  /**
   * Generates title for each widget item from event name
   * event { shape } contains event metadata
   */
  generateWidgetItemTitle(event) {
    return `${event.group} - ${event.name.split('(')[0].trim()}` // e.g "WM 2018 - Skyttekung"
  }

  /**
   * Sorts outcomes by lowest odds and label if same odds
   * outcomes { array } outcomes to sort
   */
  sortOutcomesByLowestOdds(outcomes) {
    return outcomes.sort((a, b) => {
      if (a.odds < b.odds) {
        return -1
      } else if (a.odds === b.odds) {
        if (a.label < b.label) {
          return -1
        }
        return 1
      } else if (a.odds > b.odds) {
        return 1
      }
    })
  }

  /**
   * Returns event node to display at top of widget
   * eventData { shape } eventData object containing betOffer and event metadata
   * numberOfOutcomes { number } how many outcomes we want the widget to render
   */
  renderTopEvent(eventData, numberOfOutcomes = 3) {
    // filter out outcomes without odds returned (when Kambi suspend outcomes the outcome is returned without odds resulting in `NaN` if we don't filter them out)
    const outcomesWithOdds = eventData.betOffers[0].outcomes.filter(
      outcome => outcome.odds !== undefined
    )
    return (
      <List
        title={this.generateWidgetItemTitle(eventData)}
        handleClick={() => this.navigateToEvent(eventData)}
        showNavLink={outcomesWithOdds.length > numberOfOutcomes}
        navText={t('showAllParticipants', outcomesWithOdds.length)}
      >
        {this.sortOutcomesByLowestOdds(outcomesWithOdds, numberOfOutcomes)
          .slice(0, numberOfOutcomes)
          .map(outcome => {
            let flagUrl = null
            const participant = outcome.label.split('(')[0]
            const countrySplit = outcome.englishLabel.split('(')

            if (
              countrySplit &&
              countrySplit.length > 1 &&
              eventData.groupId === WORLD_CUP_2018_ID
            ) {
              flagUrl = this.generateCountryFlagUrl(
                countrySplit[1].slice(0, countrySplit[1].length - 1)
              )
            } else if (eventData.groupId === WORLD_CUP_2018_ID) {
              flagUrl = this.generateCountryFlagUrl(countrySplit[0])
            }

            return (
              <ListItem
                key={outcome.id}
                participant={participant}
                flagUrl={flagUrl}
                fallbackFlagUrl={'../../assets/world_cup_2018.svg'}
                outcome={outcome}
                event={eventData}
              />
            )
          })}
      </List>
    )
  }

  renderMatchEvents() {
    return this.state.events
      .filter(event => event.betOffers.length > 0)
      .map(event => {
        const countries = event.englishName.split(' - ')
        const isWorldCup = event.groupId === WORLD_CUP_2018_ID
        return (
          <Event
            key={event.id}
            event={event}
            liveData={event.liveData}
            outcomes={event.betOffers[0].outcomes}
            homeFlag={
              isWorldCup ? this.generateCountryFlagUrl(countries[0]) : null
            }
            awayFlag={
              isWorldCup ? this.generateCountryFlagUrl(countries[1]) : null
            }
            isMobile={this.state.mobile}
          />
        )
      })
  }

  /**
   * renders items based on device as we cannot pass null or false to ScrolledList
   */
  renderScrolledListItems() {
    let scrolledListItems = [this.renderMatchEvents()]
    if (mobile()) {
      scrolledListItems.unshift(
        <TournamentLogo logoUrl={this.props.iconUrl} key="tournamentLogo" />
      )
    }

    return scrolledListItems.map(item => item)
  }

  /**
   * Renders component.
   * @returns {XML}
   */
  render() {
    const { leftWidget, rightWidget } = this.state

    return (
      <div className={styles.widget}>
        <BlendedBackground
          backgroundUrl={this.props.backgroundUrl}
          blendWithOperatorColor={this.state.usingDefaultBackground}
        />
        {!mobile() && (
          <div className={styles.topArea}>
            {this.renderTopEvent(leftWidget)}
            <TournamentLogo logoUrl={this.props.iconUrl} />
            {this.renderTopEvent(rightWidget)}
          </div>
        )}
        <ScrolledList
          renderPrevButton={props => <ArrowButton type="left" {...props} />}
          renderNextButton={props => <ArrowButton type="right" {...props} />}
          renderItemContainer={props => <ItemContainer {...props} />}
          selected={this.state.selected}
          scrollToItemMode={ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT}
          showControls={!mobile()}
        >
          {this.renderScrolledListItems()}
        </ScrolledList>
      </div>
    )
  }
}

/**
 * @property events {Array} events to display in the match overview bottom widget
 * @property compentitions {Array} competitions with keys leftWidget, rightWidget containing their respective betOffers
 * @property iconUrl {String} provides full path to tournament icon svg
 * @property backgroundUrl {String} provides path to backgroundImage
 */
TournamentOverviewWidget.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  competitions: PropTypes.shape().isRequired,
  backgroundUrl: PropTypes.string,
  flagBaseUrl: PropTypes.string,
  iconUrl: PropTypes.string,
}

export default TournamentOverviewWidget
