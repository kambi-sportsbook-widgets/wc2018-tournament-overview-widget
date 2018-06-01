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
    filter: '/football/world_cup_2018',
    iconUrl:
      'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/world_cup_2018.svg',
    flagBaseUrl:
      'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/icons/',
    backgroundUrl:
      'https://d1fqgomuxh4f5p.cloudfront.net/tournamentdata/worldcup2018/overview-bw-bg-desktop.jpg',
    rightWidgetInput: {
      // golden boot
      eventId: 1004514530,
      // criterionId: 1001868386,
      criterionId: 3939993939,
    },
    leftWidgetInput: {
      // tournament winner
      eventId: 1002163009,
      criterionId: 1004240929,
    },

    // rightWidgetInput : { // golden ball
    //   eventId: 1004494885,
    //   criterionId: 1001613138,
    // },
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
    return kambi.getEvents(filter, leftWidgetInput, rightWidgetInput)
  })
  .then(({ events, competitions }) => {
    const { filter, iconUrl, flagBaseUrl, backgroundUrl } = coreLibrary.args

    ReactDOM.render(
      <TournamentOverviewWidget
        competitions={competitions}
        events={events}
        iconUrl={iconUrl}
        flagBaseUrl={flagBaseUrl}
        backgroundUrl={backgroundUrl}
        filter={filter}
      />,
      coreLibrary.rootElement,
      () => {
        coreLibrary.args.onWidgetLoaded()
      }
    )
    const originalOnWidgetRemoved = coreLibrary.args.onWidgetRemoved
    coreLibrary.args.onWidgetRemoved = err => {
      ReactDOM.unmountComponentAtNode(coreLibrary.rootElement)
      if (originalOnWidgetRemoved) {
        originalOnWidgetRemoved(err)
      }
    }
  })
  .catch(err => {
    console.error(err)
    widgetModule.removeWidget(err)
  })
