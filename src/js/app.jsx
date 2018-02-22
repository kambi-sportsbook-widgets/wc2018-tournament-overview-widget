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
    widgetTrackingName: 'wc2018-tournament-overview',
    filter: "/football/world_cup_2018",
    pollingInterval: 30000,
    pollingCount: 4,
    eventsRefreshInterval: 120000,
    // flagBaseUrl: '',
    backgroundUrl: null,
    // iconUrl: null
  })
  .then(() => {
    const { 
      filter, // filter not used as we want to hardcode wc2018
      eventsRefreshInterval,
      pollingCount,
      flagBaseUrl,
      backgroundUrl,
      iconUrl,
      pollingInterval
    } = coreLibrary.args 

    eventsModule.liveEventPollingInterval = pollingInterval    
    const widget = new Widget(filter, {
      eventsRefreshInterval,
      pollingCount,
      onFatal,
      flagBaseUrl,
      backgroundUrl,
      iconUrl
    })

    return widget.init()
  })
  .catch(onFatal)