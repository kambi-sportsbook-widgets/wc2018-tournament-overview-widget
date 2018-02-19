import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import { widgetModule } from 'kambi-widget-core-library'
import { OutcomeButton } from 'kambi-widget-components'
// import isMobile from '../Services/mobile'
import styles from './ListItem.scss'


/**
 * Called after switching the group.
 * @param {number} idx Group index
 */


class ListItem extends Component {
  /**
   * Constructs.
   * @param {object} props Component properties
   */
  // constructor(props) {
  //  //  super(props)
  //  //  widgetModule.enableWidgetTransition(true)
  // }

  // /**
  //  * Called after component mounts
  //  */
  // componentDidMount() {
  //  //  widgetModule.adaptWidgetHeight()
  // }

  handleBrokenUrl() {
    this.img.style.display = 'none'
  }

  /**
   * Renders widget.
   * @returns {XML}
   */
  render() {
   const { participant, flagUrl, outcome, handleClick } = this.props
    return (
      <div>
         <li className={styles.row}>
            {
              flagUrl ? (
                <div className={styles.flag} onClick={handleClick}>
                  <img
                    role="presentation"
                    src={flagUrl}
                    ref={(img) => { this.img = img }}
                    onError={() => this.handleBrokenUrl()}
                  />
                </div>
              ) : null
            }
            <span className={styles.participant} onClick={handleClick}>
              {participant}
            </span>
            <div className={styles.button}>
              <OutcomeButton outcome={outcome} label={false} outlineStyle={true} />
            </div>
         </li>
      </div>
    )
  }
}


/**
* BetOffer title
* BetOffer tagline
*/
// ListItem.propTypes = {
//   title: PropTypes.string.isRequired,
//   tagline: PropTypes.string.isRequired,
// }

export default ListItem