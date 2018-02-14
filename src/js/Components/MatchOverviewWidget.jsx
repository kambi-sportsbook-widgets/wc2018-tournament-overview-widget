import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ScrolledList, BlendedBackground } from 'kambi-widget-components'
import styles from './MatchOverviewWidget.scss'
import Event from './Event'
import ArrowButton from './ArrowButton'
import ItemContainer from './ItemContainer'
import TournamentLogo from './TournamentLogo'
import mobile from '../Services/mobile'

/**
 * How long (in milliseconds) to wait before scrolling league logo out
 * @type {number}
 */
const MOBILE_INITIAL_SCROLL_DELAY = 2000

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

  /**
   * Renders component.
   * @returns {XML}
   */
  render() {    
    return (
      <div className={styles.widget}>
        <BlendedBackground backgroundUrl={this.props.backgroundUrl} />
        <div style={{height: '150px'}} />
        <ScrolledList
          renderPrevButton={props => <ArrowButton type="left" {...props} />}
          renderNextButton={props => <ArrowButton type="right" {...props} />}
          renderItemContainer={props => <ItemContainer {...props} />}
          selected={this.state.selected}
          scrollToItemMode={ScrolledList.SCROLL_TO_ITEM_MODE.TO_LEFT}
          showControls={!mobile()}
        >
          <TournamentLogo logoName={this.props.tournamentLogo} />
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
 * @property tournamentLogo {String} tournament logo classname
 * @property backgroundUrl {String} provides path to backgroundImage
 */
MatchOverviewWidget.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object).isRequired,
  tournamentLogo: PropTypes.string,
  backgroundUrl: PropTypes.string
}

MatchOverviewWidget.defaultProps = {
  tournamentLogo: null,
  backgroundUrl: 'assets/overview-bw-bg-desktop.jpg',
  flagBaseUrl: '../../assets/icons/'
}

export default MatchOverviewWidget
