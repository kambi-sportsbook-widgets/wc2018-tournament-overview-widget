import React from 'react'
import ReactDOM from 'react-dom'
import { widgetModule } from 'kambi-widget-core-library'
import TournamentOverviewWidget from '../Components/TournamentOverviewWidget'
import kambi from '../Services/kambi'
import live from '../Services/live'
import mobile from '../Services/mobile'


/**
 * Handles incoming event's live data update.
 * @param {object} liveEventData Event's live data
 */
const updateLiveEventData = function(liveEventData) {
  const event = this.events.find(
    event => event.event.id == liveEventData.eventId
  )

  if (!event) {
    console.warn(`Live event not found: ${liveEventData.eventId}`)
    return
  }

  event.liveData = liveEventData
}

/**
 * Renders widget within previously defined container (rootEl).
 */
const render = function() {
  ReactDOM.render(
    <TournamentOverviewWidget
      competitions={this.competitions}
      events={this.events}
      iconUrl={this.iconUrl}
      flagBaseUrl={this.flagBaseUrl}
    />,
    this.rootEl
  )
}

/**
 * Fetches events based on current filters and sets polling on the live ones.
 * @returns {Promise}
 */
const refreshEvents = function() {
  return kambi
    .getEvents(this.filter)
    .then(({ events, competitions, filter }) => {
      this.events = events
      this.competitions = competitions

      const liveEvents = this.liveEvents
      // no live events, schedule refresh
      if (liveEvents.length == 0) {
        setTimeout(refreshEvents.bind(this), this.eventsRefreshInterval)
      }
      // subscribe to notifications on live events
      live.subscribeToEvents(
        liveEvents.map(event => event.event.id),
        liveEventData => {
          updateLiveEventData.call(this, liveEventData)
          render.call(this)
        }, // onUpdate
        refreshEvents // onDrained
      )
      // render fetched events
      render.call(this)
    })
    .catch(err => {
      console.error(err)
    })
}

class Widget {
  /**
   * Creates new Match Overview widget and manages its lifecycle.
   * @param {HTMLElement} [rootEl] Widget's mount point. Defaults to #root
   * @param {number} [eventsRefreshInterval=120000] Interval in milliseconds to look for live events (if none are live currently)
   * @param {number} [pollingCount=4] Maximum number of concurrently watched live events
   * @param {string} [backgroundUrl] Url pointing to custom background
   */
  constructor(
    filter = '/football/world_cup_2018',
    {
      rootEl = document.getElementById('root'),
      eventsRefreshInterval = 120000,
      pollingCount = 4,
      onFatal = e => {
        throw e
      },
      backgroundUrl,
    }
  ) {
    this.filter = filter
    this.rootEl = rootEl
    this.eventsRefreshInterval = eventsRefreshInterval
    this.pollingCount = pollingCount
    this.onFatal = onFatal
    this.backgroundUrl = backgroundUrl

    this.iconUrl = 'assets/icons/world_cup_2018.svg'
    this.flagBaseUrl = 'assets/icons/'
    this.events = []
  }

  init() {
    widgetModule.setWidgetHeight(340)
    return refreshEvents.call(this)
  }

  /**
   * Filters live events out of current events.
   * @returns {object[]}
   */
  get liveEvents() {
    return this.events.reduce((events, event) => {
      if (events.length >= this.pollingCount) {
        return events
      }

      if (event.event.openForLiveBetting) {
        events.push(event)
      }

      return events
    }, [])
  }

}

export default Widget
