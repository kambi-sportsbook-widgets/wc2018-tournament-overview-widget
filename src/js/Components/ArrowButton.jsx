import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ArrowButton.scss'

const ArrowSvg = () => {
  return (
    <svg
      width="22px"
      height="36px"
      viewBox="0 860 420 500"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      fill="#fff"
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
  )
}

class ArrowButton extends Component {
  state = {
    isHovered: false,
  }

  updateHoveredState = bool => {
    this.setState({
      isHovered: bool,
    })
  }

  render() {
    const { disabled, onClick, type } = this.props
    const iconStyles = [styles.icon]
    const shadowStyles = [styles.shadow]

    if (this.state.isHovered) {
      iconStyles.push(styles.iconHover)
    }
    if (!disabled) {
      shadowStyles.push(styles.shadowHover)
    }

    return (
      <div className={styles[type]}>
        <div className={shadowStyles.join(' ')} />
        <button
          className={iconStyles.join(' ')}
          disabled={disabled}
          onClick={onClick}
          onMouseEnter={() => this.updateHoveredState(true)}
          onMouseLeave={() => this.updateHoveredState(false)}
        >
          <ArrowSvg />
        </button>
      </div>
    )
  }
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
