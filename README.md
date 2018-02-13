# wc2018-tournament-overview-widget

![](./screenshot.png)

A widget showing the match schedule of upcoming matches in a scrollable list. The matches shown are based on the tournament (wc2018). The matches are ordered by their start date.

In desktop mode the widget has clickable arrows to scroll the widget, In mobile mode the widget instead scrolls normally (by "tap-draging"). In mobile mode the widget has a smaller main logo which will be shown briefly before automatically scrolling it out of sight.

## Configuration

Arguments and default values:
```json
"args": {
    "filter": [],
    "combineFilters": false,
    "pollingInterval": 30000,
    "pollingCount": 4,
    "eventsRefreshInterval": 120000,
    "widgetTrackingName": "gm-match-overview-widget",
    "compareAgainstHighlights": true,
}
```

1.  `filter` - Array<string> - empty for now as we should not use filters.
2. `combineFilters` - boolean - should be false for now as we should not use filters. if true will use all the filters that are also with the highlights mixing different tournaments together
5. `pollingInterval` - number - interval in milliseconds to get new live data from live matches
6. `pollingCount` - number - maximum number of matches to poll for live data at the same time
7. `eventsRefreshInterval` - number - interval in milliseconds to look for live events
8. `widgetTrackingName` - string - tracking name for analytics purposes
9. `compareAgainstHighlights` - boolean - determines whether you want to compare whether the filters are within the highlighted events (popular events) or not. Will use the first item in the filter that returns events.

### Build Instructions

Please refer to the [core-library](https://github.com/kambi-sportsbook-widgets/widget-core-library)
