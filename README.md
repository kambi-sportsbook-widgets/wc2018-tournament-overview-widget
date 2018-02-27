# wc2018-tournament-overview-widget

![](./screenshot.png)

A widget showing the match schedule of upcoming matches in a scrollable list. The matches shown are based on the tournament (wc2018). The matches are ordered by their start date.

In desktop mode the widget has clickable arrows to scroll the widget, In mobile mode the widget instead scrolls normally (by "tap-draging"). In mobile mode the widget has a smaller main logo which will be shown briefly before automatically scrolling it out of sight.

## Configuration

Arguments and default values:
```json
"args": {
    widgetTrackingName: "wc2018-tournament-overview",
    filter: "/football/world_cup_2018",
    iconUrl: "assets/icons/world_cup_2018.svg",
    flagBaseUrl: "assets/icons/",
    backgroundUrl: "assets/overview-bw-bg-desktop.jpg",
    pollingInterval: 30000,
    pollingCount: 4,
    eventsRefreshInterval: 120000,
    lefttWidgetInput : {
      eventId: 1004514530,
      criterionId: 1001868386,
    },
    rightWidgetInput : {
      eventId: 1002163009,
      criterionId: 1004240929
    },
}
```

1. `widgetTrackingName` - String - name for tracking analytics
2. `filter` - String - url path to tournament
3. `iconUrl` - String - url path to tournament icon
4. `flagBaseUrl` - String - url path to participant flags
5. `backGroundUrl` - String - url path to backgroundUrl. Option to provide custom background image for widget. Otherwise, default background will be used.
6. `pollingInterval` - number - interval in milliseconds to get new live data from live matches
7. `pollingCount` - number - maximum number of matches to poll for live data at the same time
8. `eventsRefreshInterval` - number - interval in milliseconds to look for live events
9. `leftWidgetInput` - object - contains eventId {number} and criterionId {number} for betOffer to display in leftWidget. Defults to *Winner*
10. `rightWidgetInput` - object - contains eventId {number} and criterionId {number} for betOffer to display in rightWidget. Defaults to *Golden Boot*

### Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
