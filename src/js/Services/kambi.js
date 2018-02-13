import {
  offeringModule,
  widgetModule,
} from 'kambi-widget-core-library'


/**
 * Fetches events by supplied filter
 * @param {String} filters Filters to check
 * @returns {Promise.<{filter: string, events: object[]}>}
 */
const getEventsProgressively = function(filter) {
  return offeringModule.getEventsByFilter(filter)
    .then(events => {
      if (events == null) {
        throw new Error(`No events available for supplied filter: ${filter}`)
      }
      return Promise.resolve({filter, events: events.events})
    })
    .catch(err => {
      widgetModule.removeWidget()
      Promise.reject(err)
    })
}

/**
 * Fetches events for given filter list.
 * Returns object having events array and applied filter field.
 * @param {string} filters Filters
 * @returns {Promise.<{events: object[], filter: string}>}
 */
const getEvents = (filter) => getEventsProgressively(filter)

export default { getEvents }
