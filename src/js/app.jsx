import React from 'react'
import ReactDOM from 'react-dom'
import { coreLibrary, widgetModule } from 'kambi-widget-core-library'
import { setConfigValues } from 'kambi-offering-api-module'

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
      criterionId: 1001868386,
    },
    leftWidgetInput: {
      // tournament winner
      eventId: 1002163009,
      criterionId: 1004240929,
    },
  })
  .then(() => {
    const { filter, leftWidgetInput, rightWidgetInput } = coreLibrary.args
    // set config values from coreLibrary
    setConfigValues({
      ...coreLibrary.config,
      ...{
        apiBaseUrls: {
          v2: 'https://e1-api.kambi.com/offering/api/v2/',
          v3: 'https://e1-api.kambi.com/offering/api/v3/',
          v2018: 'https://e1-api.aws.kambicdn.com/offering/v2018/',
        },
      },
    })

    return kambi.getEvents(filter, leftWidgetInput, rightWidgetInput)
  })
  .then(({ events, competitions }) => {
    const { iconUrl, flagBaseUrl, backgroundUrl } = coreLibrary.args

    ReactDOM.render(
      <TournamentOverviewWidget
        competitions={competitions}
        events={events}
        iconUrl={iconUrl}
        flagBaseUrl={flagBaseUrl}
        backgroundUrl={backgroundUrl}
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
