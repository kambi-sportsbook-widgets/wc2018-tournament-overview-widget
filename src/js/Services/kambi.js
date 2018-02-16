import {
  offeringModule,
  widgetModule,
} from 'kambi-widget-core-library'

let GOLDEN_BOOT_ID = 2103056838
let TOURNAMENT_WINNER = 2104459243

// GOLDEN_BOOT_ID = 2085268871
// TOURNAMENT_WINNER = 2084384039

/**
 * Fetches events by supplied filter
 * @param {String} filters Filters to check
 * @returns {Promise.<{filter: string, events: object[]}>}
 */
const getEventsProgressively = function(filter) {

  const dataRequests = [
    offeringModule.getEventsByFilter(filter), // tournament matches
    offeringModule.getEventsByFilter(`${filter}/all/all/competitions`) // tournament competitions (e.g. golden boot, tournament winner etc.)
  ]

  return Promise.all(dataRequests)
    .then(tournamentData => {
      if (tournamentData == null) {
        throw new Error(`No tournament data available for supplied filters: ${filter}, ${filter}/all/all/competitions`)
      }
      const tournamentEvents = tournamentData[0].events
      const tournamentCompetitions = tournamentData[1].events

      // get competitions to render by criterionId (hardcoded)
      let leftWidget
      let rightWidget
      tournamentCompetitions.forEach(competition => {
        competition.betOffers.forEach(betOffer => {
          if (betOffer.id === TOURNAMENT_WINNER) {
            leftWidget = competition
          } else if (betOffer.id === GOLDEN_BOOT_ID) {
            rightWidget = competition
          }
          return
        })
      })

      return Promise.resolve({filter, events: tournamentEvents, competitions: {leftWidget, rightWidget}})
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
