import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrolledList, BlendedBackground } from 'kambi-widget-components'

import mobile from '../Services/mobile'
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
const WIDGET_HEIGHT_DESKTOP = 350
const WIDGET_HEIGHT_MOBILE = 150
const DEFAULT_BACKGROUND = 'assets/overview-bw-bg-desktop.jpg'
// const DEFAULT_BACKGROUND = '../../assets/overview-bw-bg-desktop.jpg'

const t = translationModule.getTranslation.bind(translationModule)

class TournamentOverviewWidget extends Component {
  /**
   * Constructs.
   * @param {object} props Component properties
   */
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      mobile: mobile(),
      widgetHeight: mobile() ? WIDGET_HEIGHT_MOBILE : WIDGET_HEIGHT_DESKTOP,
      usingDefaultBackground: props.backgroundUrl === DEFAULT_BACKGROUND
      // usingDefaultBackground: false
    }
    
    this.handleListItemClick = this.handleListItemClick.bind(this)
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
    widgetModule.setWidgetHeight(this.state.widgetHeight)
  }

  componentDidUpdate() {
    widgetModule.setWidgetHeight(this.state.widgetHeight)
  }


  /**
   * Generates country icon url
   */
  generateCountryFlagUrl(country) {
    const normalisedCountryName = country.toLowerCase().replace(/\s/g, '_')
    return `${this.props.flagBaseUrl}${normalisedCountryName}.svg`
  }

  handleListItemClick(event) {
    if (event.event.openForLiveBetting === true) {
      widgetModule.navigateToLiveEvent(event.event.id)
    } else {
      widgetModule.navigateToEvent(event.event.id)
    }
  }

  navigateToEvent(event) {
    if (event.event.liveBetOffers) {
      // Navigate to live event
      // http://kambi-sportsbook-widgets.github.io/widget-core-library/module-widgetModule.html#.navigateToLiveEvent__anchor
      widgetModule.navigateToLiveEvent(event.event.id)
    } else {
      // Navigate to upcoming event
      // http://kambi-sportsbook-widgets.github.io/widget-core-library/module-widgetModule.html#.navigateToEvent__anchor
      widgetModule.navigateToEvent(event.event.id)
    }
  }

  generateWidgetItemTitle(event) {
    return `${event.group} - ${event.name.split('(')[0].trim()}` // e.g "WM 2018 - Skyttekung"
  }

  sortOutcomesByLowestOdds(outcomes, numberItemsToReturn) {
    return outcomes.sort((a, b) => {
      return a.odds - b.odds
    }).slice(0, numberItemsToReturn)
  }

  renderTopEvent(eventData, numberOfOutcomes = 3) {
    return (
      <List
        title={this.generateWidgetItemTitle(eventData.event)}
        handleClick={() => this.navigateToEvent(eventData)}
        showNavLink={eventData.betOffers[0].outcomes.length > numberOfOutcomes}
        navText={t('showAllParticipants', eventData.betOffers[0].outcomes.length)}
      >
        {
          this.sortOutcomesByLowestOdds(eventData.betOffers[0].outcomes, numberOfOutcomes).map(outcome => {
            let flagUrl = null
            const participant = outcome.label.split('(')[0]
            const countrySplit = outcome.englishLabel.split('(')
            
            if (countrySplit && countrySplit.length > 1 && eventData.event.groupId === WORLD_CUP_2018_ID) {
              flagUrl = this.generateCountryFlagUrl(countrySplit[1].slice(0, countrySplit[1].length -1))
            } else if (eventData.event.groupId === WORLD_CUP_2018_ID) {
              flagUrl = this.generateCountryFlagUrl(countrySplit[0])
            }

            return (
              <ListItem
                key={outcome.id}
                participant={participant}
                flagUrl={flagUrl}
                fallbackFlagUrl={'../../assets/world_cup_2018.svg'}
                outcome={outcome}
                handleClick={() => handleListItemClick(eventData)}
              />
          )})
        }            
      </List>
    )
  }

  /**
   * Renders component.
   * @returns {XML}
   */
  render() {
    const { leftWidget, rightWidget } = this.props.competitions
    
    return (
      <div className={[styles.widget, 'KambiWidget-primary-background-color'].join(' ')}>
        <BlendedBackground backgroundUrl={this.props.backgroundUrl} blendWithOperatorColor={this.state.usingDefaultBackground} />
        {
          !mobile() &&
          <div className={styles.topArea}>
            { this.renderTopEvent(leftWidget) }
            <TournamentLogo logoUrl={this.props.iconUrl} />
            { this.renderTopEvent(rightWidget) }
          </div>
        }
        <ScrolledList
          renderPrevButton={props => <ArrowButton type="left" {...props} />}
          renderNextButton={props => <ArrowButton type="right" {...props} />}
          renderItemContainer={props => <ItemContainer {...props} />}
          selected={this.state.selected}
          scrollToItemMode={ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT}
          showControls={!mobile()}
        >
          { mobile() && <TournamentLogo logoUrl={this.props.iconUrl} />}
          {this.props.events
            .filter(event => event.betOffers.length > 0)
            .map(event => {
              const countries = event.event.englishName.split(' - ')
              const isWorldCup = event.event.groupId === WORLD_CUP_2018_ID
              return (
                <Event
                  key={event.event.id}
                  event={event.event}
                  liveData={event.liveData}
                  outcomes={event.betOffers[0].outcomes}
                  homeFlag={isWorldCup ? this.generateCountryFlagUrl(countries[0]) : null}
                  awayFlag={isWorldCup ? this.generateCountryFlagUrl(countries[1]) : null}
                />
              )
            })}
        </ScrolledList>
      </div>
    )
  }
}

/**
 * @property events {Array} events to display
 * @property compentitions {Array} competitions with keys leftWidget, rightWidget containing their respective betOffers
 * @property tournamentLogo {String} tournament logo classname
 * @property backgroundUrl {String} provides path to backgroundImage
 */
TournamentOverviewWidget.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  competitions: PropTypes.shape().isRequired,
  tournamentLogo: PropTypes.string,
  backgroundUrl: PropTypes.string
}

TournamentOverviewWidget.defaultProps = {
  tournamentLogo: null,
  backgroundUrl: DEFAULT_BACKGROUND,
  flagBaseUrl: '../../assets/icons/'
}

export default TournamentOverviewWidget