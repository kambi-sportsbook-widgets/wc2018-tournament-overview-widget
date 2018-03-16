import React from 'react'
import PropTypes from 'prop-types'
import styles from './ArrowButton.scss'

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
      <svg
        onClick={onClick}
        className={styles.icon}
        width="22px"
        height="36px"
        viewBox="0 860 420 500"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="arrowLeft"
          transform="scale(1, -1) translate(0, -1500)"
          d="M358.286 640q0-7.429-5.714-13.143l-224.571-224.571 224.571-224.571q5.714-5.714
                5.714-13.143t-5.714-13.143l-28.571-28.571q-5.714-5.714-13.143-5.714t-13.143 5.714l-266.286
                266.286q-5.714 5.714-5.714 13.143t5.714 13.143l266.286 266.286q5.714 5.714
                13.143 5.714t13.143-5.714l28.571-28.571q5.714-5.714 5.714-13.143z"
        />
      </svg>
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
