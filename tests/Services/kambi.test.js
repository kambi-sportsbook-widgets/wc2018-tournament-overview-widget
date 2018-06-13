import { coreLibrary, widgetModule } from 'kambi-widget-core-library'
import { getEventsByFilter } from 'kambi-offering-api-module'

import kambi from '../../src/js/Services/kambi'

jest.mock('kambi-widget-core-library', () => ({
  coreLibrary: {
    config: {
      routeRoot: '',
    },
  },
  widgetModule: {
    createFilterUrl: jest.fn(),
  },
}))

jest.mock('kambi-offering-api-module', () => ({
  getEventsByFilter: jest.fn(),
}))

const mockLeftInput = { criterionId: 100, eventId: 999 }
const mockRightInput = { criterionId: 200, eventId: 666 }
const mockEvent = {
  id: 999,
  group: 'VM 2018',
  groupId: 393929,
  name: 'Mock name',
  englishName: 'Mock english name',
  type: 'ET_MATCH',
  liveData: {},
  betOffers: [
    { id: 1, outcomes: [], criterion: { id: mockLeftInput.criterionId } },
    { id: 2, outcomes: [], criterion: { id: mockRightInput.criterionId } },
  ],
}
const mockSecondEvent = {
  id: 666,
  group: 'VM 2018',
  groupId: 393929,
  name: 'Mock name',
  englishName: 'Mock english name',
  type: 'ET_MATCH',
  liveData: {},
  betOffers: [
    { id: 1, outcomes: [], criterion: { id: mockLeftInput.criterionId } },
    { id: 2, outcomes: [], criterion: { id: mockRightInput.criterionId } },
  ],
}

const mockCompetitions = {
  leftWidget: mockEvent,
  rightWidget: mockEvent,
}

describe('Kambi service progressive events', () => {
  it('returns events correctly', () => {
    const filter = 'test/filter/1'

    getEventsByFilter.mockImplementation(() => {
      return new Promise(resolve =>
        resolve({ events: [mockEvent, mockSecondEvent] })
      )
    })

    return kambi
      .getEvents(filter, mockLeftInput, mockRightInput)
      .then(events => {
        expect(events).toMatchSnapshot()
        expect(getEventsByFilter).toHaveBeenCalledTimes(2)
      })
  })

  it('behaves correctly when no events were found', () => {
    const filter = 'test/filter/1'

    getEventsByFilter.mockReturnValueOnce(
      new Promise(resolve => resolve([{ events: [] }, { events: [] }]))
    )

    return kambi
      .getEvents(filter)
      .then(events => {
        throw new Error('Not supposed to reach here')
      })
      .catch(err => {
        expect(
          err.message === `No events available for supplied filter: ${filter}`
        )
      })
  })
})
