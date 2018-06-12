import React from 'react'
import ReactDOM from 'react-dom'
import { coreLibrary } from 'kambi-widget-core-library'

import mobile from '../../src/js/Services/mobile'

jest.mock('kambi-widget-core-library', () => ({
  coreLibrary: {
    rootElement: {
      getBoundingClientRect: () => {
        return { width: 600 }
      },
    },
  },
}))

describe('mobile service', () => {
  beforeEach(() => {
    if ('ontouchstart' in window) {
      delete window.ontouchstart
    }

    Object.defineProperty(window.navigator, 'userAgent', {
      get: () => 'Hrome',
      configurable: true,
    })
  })

  it('detects desktop mode', () => {
    expect(mobile() === false)

    expect(mobile() === false)

    window.ontouchstart = true

    expect(mobile() === false)
  })

  it('detects mobile mode', () => {
    expect(mobile() === false)

    window.ontouchstart = true
    Object.defineProperty(window.navigator, 'userAgent', {
      get: () => 'iPhone',
      configurable: true,
    })

    expect(mobile() === true)
  })
})
