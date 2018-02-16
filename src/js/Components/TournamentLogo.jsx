import React from 'react'
import PropTypes from 'prop-types'
import styles from './TournamentLogo.scss'

const TournamentLogo = ({ logoUrl, scrolledListHasHorizontalSpaceLeft }) => {
  let className = styles.general
  if (scrolledListHasHorizontalSpaceLeft) {
    className += ' ' + styles.scrolledListHasHorizontalSpaceLeft
  }
  return (
    <div className={className}>
      <i
        className="kw-custom-logo-large-type"
        style={{
          backgroundImage: `url("${logoUrl}.svg")`,
        }}
      />
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
