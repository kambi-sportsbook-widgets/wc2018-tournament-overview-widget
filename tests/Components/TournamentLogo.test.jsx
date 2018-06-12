/* eslint-env jest */
import React from 'react'
import ReactShallowRenderer from 'react-test-renderer/shallow'
import { translationModule } from 'kambi-widget-core-library'

import TournamentLogo from '../../src/js/Components/TournamentLogo'

let renderer
let mockMobile = false
jest.mock('../../src/js/Services/mobile', () => () => mockMobile)
jest.mock('kambi-widget-core-library', () => ({
  translationModule: {
    getTranslation: jest.fn(key => `Translated ${key}`),
  },
}))

describe('Event DOM rendering', () => {
  beforeEach(() => {
    renderer = new ReactShallowRenderer()
    mockMobile = false
    translationModule.getTranslation = jest.fn()
  })

  it('renders correctly with default props', () => {
    expect(renderer.render(<TournamentLogo />)).toMatchSnapshot()
  })

  it('renders correctly with custom logo CSS class name', () => {
    expect(
      renderer.render(<TournamentLogo logoClassName="test_logo_class_name" />)
    ).toMatchSnapshot()
  })
})
