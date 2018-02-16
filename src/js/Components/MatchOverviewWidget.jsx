import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrolledList, BlendedBackground } from 'kambi-widget-components'

import mobile from '../Services/mobile'
import styles from './MatchOverviewWidget.scss'

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

class MatchOverviewWidget extends Component {
  /**
   * Constructs.
   * @param {object} props Component properties
   */
  constructor(props) {
    super(props)

    this.state = {
      selected: 0,
      mobile: mobile()
    }
    this.resize = this.onResize.bind(this)
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
    window.addEventListener('resize', this.onResize)
    
    // get competitions to render by criterionId
  }

  /**
   * Called just before component unmounting.
   */
  componentWillUnmount() {
    window.removeEventListener('resize', this.onResize)
  }

  /**
   * Handles window resize.
   */
  onResize() {
    if (mobile() != this.state.mobile) {
      this.setState({ mobile: !this.state.mobile })
    }
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
      <List title={this.generateWidgetItemTitle(eventData.event)}>
        {
          this.sortOutcomesByLowestOdds(eventData.betOffers[0].outcomes, numberOfOutcomes).map(outcome => {
            let flagUrl = null
            const participant = outcome.label.split('(')[0]
            const countrySplit = outcome.englishLabel.split('(')
            
            if (countrySplit && countrySplit.length > 1) {
              flagUrl = this.generateCountryFlagUrl(countrySplit[1].slice(0, countrySplit[1].length -1))
            } else if (eventData.event.groupId === WORLD_CUP_2018_ID) {
              flagUrl = this.generateCountryFlagUrl(outcome.englishLabel)
            }
            return (
              <ListItem
                key={outcome.id}
                participant={participant}
                flagUrl={flagUrl}
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
      <div className={styles.widget}>
        <BlendedBackground backgroundUrl={this.props.backgroundUrl} />

        <div className={styles.topArea}>
          { this.renderTopEvent(leftWidget) }
          <TournamentLogo logoUrl={this.props.iconUrl} />
          { this.renderTopEvent(rightWidget) }
        </div>

        <ScrolledList
          renderPrevButton={props => <ArrowButton type="left" {...props} />}
          renderNextButton={props => <ArrowButton type="right" {...props} />}
          renderItemContainer={props => <ItemContainer {...props} />}
          selected={this.state.selected}
          scrollToItemMode={ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT}
          showControls={!mobile()}
        >
          <TournamentLogo logoUrl={this.props.iconUrl} />
          {this.props.events
            .filter(event => event.betOffers.length > 0)
            .map(event => {
              const countries = event.event.englishName.split(' - ')
              return (
                <Event
                  key={event.event.id}
                  event={event.event}
                  liveData={event.liveData}
                  outcomes={event.betOffers[0].outcomes}
                  homeFlag={this.generateCountryFlagUrl(countries[0])}
                  awayFlag={this.generateCountryFlagUrl(countries[1])}
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
MatchOverviewWidget.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  competitions: PropTypes.shape().isRequired,
  tournamentLogo: PropTypes.string,
  backgroundUrl: PropTypes.string
}

MatchOverviewWidget.defaultProps = {
  tournamentLogo: null,
  backgroundUrl: 'assets/overview-bw-bg-desktop.jpg',
  flagBaseUrl: '../../assets/icons/'
}

export default MatchOverviewWidget
