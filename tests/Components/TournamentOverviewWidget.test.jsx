/* eslint-env jest */
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import { shallow } from 'enzyme'
import {
  widgetModule,
  coreLibrary,
  translationModule,
} from 'kambi-widget-core-library'

import TournamentOverviewWidget from '../../src/js/Components/TournamentOverviewWidget'

let renderer

const mockEvent = {
  id: 100,
  group: 'VM 2018',
  groupId: 393929,
  name: 'Mock name',
  englishName: 'Mock english name',
  liveData: {},
  betOffers: [{ id: 1, outcomes: [] }],
}

const mockCompetitions = {
  leftWidget: mockEvent,
  rightWidget: mockEvent,
}

const mockBgUrl = 'some/fake/path.jpg'

let mockMobile = false

jest.mock('../../src/js/Services/mobile', () => () => mockMobile)
jest.mock('kambi-widget-core-library', () => ({
  widgetModule: {
    setWidgetHeight: jest.fn(),
  },
  translationModule: {
    getTranslation: jest.fn(key => `Translated ${key}`),
  },
  coreLibrary: {
    rootElement: <div />,
  },
}))

jest.useFakeTimers()

const widget = (
  <TournamentOverviewWidget
    events={[mockEvent]}
    competitions={mockCompetitions}
    backgroundUrl={mockBgUrl}
  />
)

describe('TournamentOverviewWidget DOM rendering', () => {
  beforeEach(() => {
    renderer = new ReactShallowRenderer()
    mockMobile = false
    translationModule.getTranslation = jest.fn()
    widgetModule.setWidgetHeight = jest.fn()
    coreLibrary.rootElement = <div />
  })

  it('renders correctly with default props', () => {
    expect(renderer.render(widget)).toMatchSnapshot()
  })

  it('renders correctly with tournament logo', () => {
    expect(
      renderer.render(
        <TournamentOverviewWidget
          events={[mockEvent]}
          competitions={mockCompetitions}
          tournamentLogo="test_tournament_logo"
          backgroundUrl={mockBgUrl}
        />
      )
    ).toMatchSnapshot()
  })

  it('renders correctly with events', () => {
    expect(renderer.render(widget)).toMatchSnapshot()
  })

  it('renders correctly with events and betoffers', () => {
    expect(renderer.render(widget)).toMatchSnapshot()
  })

  it('renders correctly in desktop mode', () => {
    mockMobile = false
    const wrapper = shallow(widget)
    expect(wrapper.debug()).toMatchSnapshot()
  })

  it('renders correctly in mobile mode', () => {
    mockMobile = true

    const wrapper = shallow(widget)

    expect(wrapper.debug()).toMatchSnapshot()

    jest.runAllTimers()

    expect(wrapper.debug()).toMatchSnapshot()
  })
})
