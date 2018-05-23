import { offeringModule, widgetModule } from 'kambi-widget-core-library'

/**
 * Fetches events by supplied filter
 * @param {String} filters Filters to check
 * @returns {Promise.<{filter: string, events: object[]}>}
 */
const getEvents = (filter, leftWidgetInput, rightWidgetInput) => {
  const dataRequests = [
    offeringModule.getEventsByFilter(filter), // tournament matches
    offeringModule.getEventsByFilter(`${filter}/all/all/competitions`), // tournament competitions (e.g. golden boot, tournament winner etc.)
  ]

  return Promise.all(dataRequests)
    .then(tournamentData => {
      if (tournamentData == null) {
        throw new Error(
          `No tournament data available for supplied filters: ${filter}, ${filter}/all/all/competitions`
        )
      }
      const tournamentEvents = tournamentData[0].events
      const tournamentCompetitions = tournamentData[1].events

      // get competitions to render by criterionId (hardcoded)
      let leftWidget
      let rightWidget
      tournamentCompetitions.forEach(competition => {
        competition.betOffers.forEach(betOffer => {
          if (competition.event.id === leftWidgetInput.eventId) {
            if (betOffer.criterion.id === leftWidgetInput.criterionId) {
              leftWidget = competition
            }
            return
          } else if (competition.event.id === rightWidgetInput.eventId) {
            if (betOffer.criterion.id === rightWidgetInput.criterionId) {
              rightWidget = competition
            }
            return
          }
          return
        })
      })

      return Promise.resolve({
        events: tournamentEvents,
        competitions: { leftWidget, rightWidget },
      })
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export const getMatchEvents = filter => {
  return offeringModule
    .getEventsByFilter(filter)
    .then(tournamentData => {
      if (tournamentData == null) {
        throw new Error(
          `No tournament data available for supplied filters: ${filter}, ${filter}/all/all/competitions`
        )
      }

      return Promise.resolve({ events: tournamentData.events })
    })
    .catch(err => {
      return Promise.reject(err)
    })
}

export default { getEvents }
