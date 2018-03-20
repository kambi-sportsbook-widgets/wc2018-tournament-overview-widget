import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styles from './ArrowButton.scss'

import arrowSvg from '../../assets/arrow.svg'

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
          style={{ backgroundImage: `url(${arrowSvg})` }}
          onMouseEnter={() => this.updateHoveredState(true)}
          onMouseLeave={() => this.updateHoveredState(false)}
        />
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
