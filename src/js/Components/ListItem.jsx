import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { OutcomeButton } from 'kambi-widget-components'
import styles from './ListItem.scss'

class ListItem extends Component {
  /**
   * Removes images with broken urls
   */
  handleBrokenUrl() {
    this.img.style.display = 'none'
  }

  /**
   * Renders widget.
   * @returns {XML}
   */
  render() {
    const { participant, flagUrl, outcome, event } = this.props
    return (
      <div>
        <li className={styles.row}>
          {flagUrl ? (
            <div
              className={styles.flag}
              ref={img => {
                this.img = img
              }}
            >
              <img
                role="presentation"
                src={flagUrl}
                onError={() => this.handleBrokenUrl()}
              />
            </div>
          ) : null}
          <span className={styles.participant}>{participant}</span>
          <div className={styles.button}>
            <OutcomeButton
              outcome={outcome}
              label={false}
              outlineStyle={true}
              event={event}
            />
          </div>
        </li>
      </div>
    )
  }
}

/**
 * @participant { string } the participant in the game
 * @flagUrl { string } url to the participant flag (if any, otherwise null)
 * @outcome { object } containing outcome data for bet
 */
ListItem.propTypes = {
  participant: PropTypes.string,
  flagUrl: PropTypes.string,
  outcome: PropTypes.shape(),
}

export default ListItem
