import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.scss'

const List = ({
  children,
  title,
  navText,
  showNavLink = false,
  handleClick,
}) => (
  <div className={styles.general}>
    <h6 className={styles.title}>{title}</h6>
    <ul>{children}</ul>
    {showNavLink && (
      <p className={styles.nav} onClick={handleClick}>
        {navText}
      </p>
    )}
  </div>
)

/**
 * @param children {node} list items
 * @param title {string} title of list widget
 */
List.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  navText: PropTypes.string,
  showNavLink: PropTypes.bool,
  handleClick: PropTypes.func.isRequired,
}

export default List
