import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.scss'

const List = ({ children, title, navText, handleClick }) => (
  <div className={styles.general}>
    <h6 className={styles.title}>{title}</h6>
    <ul>{children}</ul>
    <p className={styles.nav} onClick={handleClick}>{navText}</p>
  </div>
)


/**
  * @param children {node} list items
  * @param title {string} title of list widget 
 */
List.propTypes = {  
  children: PropTypes.node,
  title: PropTypes.string,
  totalItems: PropTypes.number
}

export default List