import {
  coreLibrary,
  eventsModule,
  widgetModule,
} from 'kambi-widget-core-library'
import kambi from './Services/kambi'
import Widget from './Widget'

/**
 * Removes widget on fatal errors.
 * @param {Error} error Error instance
 */
const onFatal = function(error) {
  console.error(error)
  widgetModule.removeWidget()
}

coreLibrary
  .init({
    widgetTrackingName: 'wc2018-tournament-overview', // sets widget tracking name automatically by kambi when passed as arg
    filter: "/football/world_cup_2018",
    pollingInterval: 30000,
    pollingCount: 4,
    eventsRefreshInterval: 120000,
  })
  .then(() => {
    const { 
      filter, 
      eventsRefreshInterval,
      pollingCount,
      backgroundUrl,
      pollingInterval
    } = coreLibrary.args 

    eventsModule.liveEventPollingInterval = pollingInterval    
    const widget = new Widget(filter, {
      eventsRefreshInterval,
      pollingCount,
      onFatal,
      backgroundUrl,
    })

    return widget.init()
  })
  .catch(onFatal)