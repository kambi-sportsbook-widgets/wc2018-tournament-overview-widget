# wc2018-tournament-overview-widget

![](./screenshot.png)

A widget showing the match schedule of upcoming matches in a scrollable list. The matches shown are based on the tournament (wc2018). The matches are ordered by their start date.

In desktop mode the widget has clickable arrows to scroll the widget, In mobile mode the widget instead scrolls normally (by "tap-draging"). In mobile mode the widget has a smaller main logo which will be shown briefly before automatically scrolling it out of sight.

## Configuration

Arguments and default values:
```json
"args": {
    filter: "/football/world_cup_2018",
    pollingInterval: 30000,
    pollingCount: 4,
    eventsRefreshInterval: 120000,
    backgroundUrl: "pathToDefaultBackgroundImg",
}
```

1.  `filter` - String - currently defaults to `football/world_cup_2018`
2. `pollingInterval` - number - interval in milliseconds to get new live data from live matches
3. `pollingCount` - number - maximum number of matches to poll for live data at the same time
4. `eventsRefreshInterval` - number - interval in milliseconds to look for live eventsenglishName of the team + .svg Replace spaces with '_'
6. `backgroundUrl` - string - option to provide custom background image for widget. Otherwise, default background will be used.

### Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
