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
    filter: "/football/world_cup_2018", // need to ensure that this is not overwritten later
    pollingInterval: 30000,
    pollingCount: 4,
    eventsRefreshInterval: 120000,
  })
  .then(() => {
    eventsModule.liveEventPollingInterval = coreLibrary.args.pollingInterval
    const filter = coreLibrary.args.filter // not used as we want to hardcode wc2018
    const widget = new Widget("/football/world_cup_2018", {
      combineFilters: coreLibrary.args.combineFilters,
      eventsRefreshInterval: coreLibrary.args.eventsRefreshInterval,
      pollingCount: coreLibrary.args.pollingCount,
      onFatal,
    })

    return widget.init()
  })
  .catch(onFatal)
