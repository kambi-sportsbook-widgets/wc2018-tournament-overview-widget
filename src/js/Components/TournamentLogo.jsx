import React from 'react'
import PropTypes from 'prop-types'
import { translationModule } from 'kambi-widget-core-library'

import styles from './TournamentLogo.scss'
import mobile from '../Services/mobile'

const t = translationModule.getTranslation.bind(translationModule)

const TournamentLogo = ({ logoUrl, scrolledListHasHorizontalSpaceLeft }) => {
  let className = styles.general
  if (scrolledListHasHorizontalSpaceLeft) {
    className = `${className} ${styles.scrolledListHasHorizontalSpaceLeft}`
  } else if (!mobile()) {
    className = `${className} ${styles.desktop}`
  }
  return (
    <div className={className}>
      <i
        className="kw-custom-logo-large-type"
        style={{
          backgroundImage: `url("${logoUrl}")`,
        }}
      />
      <div className={styles.tournament}>
        <p>{t('wc2018').toUpperCase()}</p>
        <p>{t('russia').toUpperCase()}</p>
      </div>
    </div>
  )
}

TournamentLogo.propTypes = {
  /**
   * Logo CSS class name.
   * These classes are defined in operator-specific CSS file.
   */
  logoName: PropTypes.string,
}

TournamentLogo.defaultProps = {
  logoName: 'football',
}

export default TournamentLogo
