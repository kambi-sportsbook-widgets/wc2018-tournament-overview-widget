import React from 'react'
import PropTypes from 'prop-types'
import styles from './ArrowButton.scss'

import arrowSvg from '../../assets/arrow.svg'

const ArrowButton = ({ type, disabled, onClick, customStyle = false }) => {
  const buttonStyles = [styles[type]]
  if (customStyle) {
    buttonStyles.push('KambiWidget-primary-color')
  }

  return (
    <button
      className={buttonStyles.join(' ')}
      disabled={disabled}
      style={customStyle ? {} : { color: '#000' }}
    >
      <div
        onClick={onClick}
        className={styles.icon}
        style={{ backgroundImage: `url(${arrowSvg})` }}
      />
    </button>
  )
}

ArrowButton.propTypes = {
  /**
   * Arrow direction - left or right
   */
  type: PropTypes.oneOf(['left', 'right']).isRequired,

  /**
   * On click handler
   */
  onClick: PropTypes.func.isRequired,

  /**
   * Should button be disabled?
   * Defaults to false.
   */
  disabled: PropTypes.bool,
}

ArrowButton.defaultProps = {
  disabled: false,
}

export default ArrowButton
