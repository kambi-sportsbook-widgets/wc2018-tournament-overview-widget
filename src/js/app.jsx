import React from 'react'
import ReactDOM from 'react-dom'
import {
  coreLibrary,
  eventsModule,
  widgetModule,
} from 'kambi-widget-core-library'
import kambi from './Services/kambi'
import TournamentOverviewWidget from './Components/TournamentOverviewWidget'


coreLibrary
  .init({
    widgetTrackingName: 'wc2018-tournament-overview', // sets widget tracking name automatically by kambi when passed as arg
    filter: "/football/world_cup_2018",
    iconUrl: 'assets/icons/world_cup_2018.svg',
    flagBaseUrl: 'assets/icons/',
    backgroundUrl: 'assets/overview-bw-bg-desktop.jpg',
    pollingInterval: 30000,
    pollingCount: 4,
    eventsRefreshInterval: 120000,
    rightWidgetInput : { // golden boot
      eventId: 1004514530,
      criterionId: 1001868386,
    },
    leftWidgetInput : { // tournament winner
      eventId: 1002163009,
      criterionId: 1004240929
    },
    // // CHAMPIONS LEAGUE
    // filter: "/football/champions_league",
    // rightWidgetInput : { // top goalscorer (no golden boot)
    //   eventId: 1004031266,
    //   criterionId: 1001304945,
    // },
    // leftWidgetInput : { // tournament winner
    //   eventId: 1003997020,
    //   criterionId: 1001221607
    // }
  })
  .then(() => {
    const { filter, leftWidgetInput, rightWidgetInput } = coreLibrary.args
    return kambi .getEvents(filter, leftWidgetInput, rightWidgetInput)
  })
  .then(({ events, competitions }) => {
    const {
      filter,
      iconUrl,
      flagBaseUrl,
      backgroundUrl,
      eventsRefreshInterval,
      pollingCount,
      pollingInterval
    } = coreLibrary.args

    eventsModule.liveEventPollingInterval = pollingInterval
    ReactDOM.render(
      <TournamentOverviewWidget
        competitions={competitions}
        events={events}
        iconUrl={iconUrl}
        flagBaseUrl={flagBaseUrl}
        backgroundUrl={backgroundUrl}
        eventsRefreshInterval={eventsRefreshInterval}
        pollingCount={pollingCount}
        filter={filter}
      />,
      document.getElementById('root')
    )
  })
  .catch(err => {
    console.error(err)    
    widgetModule.removeWidget()
  })