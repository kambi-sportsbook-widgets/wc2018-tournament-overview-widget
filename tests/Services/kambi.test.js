import kambi from '../../src/js/Services/kambi'
import {
  coreLibrary,
  offeringModule,
  widgetModule,
} from 'kambi-widget-core-library'

jest.mock('kambi-widget-core-library', () => ({
  coreLibrary: {
    config: {
      routeRoot: '',
    },
  },
  offeringModule: {
    getHighlight: jest.fn(),
    getEventsByFilter: jest.fn(),
  },
  widgetModule: {
    createFilterUrl: jest.fn(),
  },
}))

const mockLeftInput = { criterionId: 100, eventId: 999 }
const mockRightInput = { criterionId: 200, eventId: 666 }
const mockEvent = {
  event: {
    id: 999,
    group: 'VM 2018',
    groupId: 393929,
    name: 'Mock name',
    englishName: 'Mock english name',
    type: 'ET_MATCH',
  },
  liveData: {},
  betOffers: [
    { id: 1, outcomes: [], criterion: { id: mockLeftInput.criterionId } },
    { id: 2, outcomes: [], criterion: { id: mockRightInput.criterionId } },
  ],
}
const mockSecondEvent = {
  event: {
    id: 666,
    group: 'VM 2018',
    groupId: 393929,
    name: 'Mock name',
    englishName: 'Mock english name',
    type: 'ET_MATCH',
  },
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
  beforeEach(() => {
    offeringModule.getEventsByFilter = jest.fn()
  })

  it('returns events correctly', () => {
    const filter = 'test/filter/1'

    offeringModule.getEventsByFilter.mockImplementation(() => {
      return new Promise(resolve =>
        resolve({ events: [mockEvent, mockSecondEvent] })
      )
    })

    return kambi
      .getEvents(filter, mockLeftInput, mockRightInput)
      .then(events => {
        expect(events).toMatchSnapshot()
        expect(offeringModule.getEventsByFilter).toHaveBeenCalledTimes(2)
      })
  })

  //   it('behaves correctly when no events were found', () => {
  //     const filter = 'test/filter/1'

  //     offeringModule.getEventsByFilter.mockReturnValueOnce(
  //       new Promise(resolve => resolve([{ events: [] }, { events: [] }]))
  //     )

  //     expect(offeringModule.getEventsByFilter).not.toHaveBeenCalled()

  //     return kambi
  //       .getEvents(filter)
  //       .then(events => {
  //         throw new Error('Not supposed to reach here')
  //       })
  //       .catch(err => {
  //         expect(
  //           err.message === `No events available for supplied filter: ${filter}`
  //         )
  //       })
  //   })
})
