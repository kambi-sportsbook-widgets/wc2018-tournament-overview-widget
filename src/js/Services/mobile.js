import { coreLibrary } from 'kambi-widget-core-library'

/**
 * Maximum mobile screen size
 * @type {number}
 */
const MOBILE_SCREEN_MAX_SIZE = 768

/**
 * Determines if the page is being displayed on mobile device.
 * @returns {boolean}
 */
const isMobile = function() {
  return (
    coreLibrary.rootElement.getBoundingClientRect().width <=
      MOBILE_SCREEN_MAX_SIZE &&
    'ontouchstart' in window &&
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  )
}

export default isMobile
