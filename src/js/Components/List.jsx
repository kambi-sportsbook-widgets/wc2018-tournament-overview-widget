import React from 'react'
import PropTypes from 'prop-types'
import styles from './List.scss'

const List = ({ children, title }) => (
  <div className={styles.general}>
    <h6 className={styles.title}>{title}</h6>
    <ul>{children}</ul>
  </div>
)


/**
  * @param children {node} list items
  * @param title {string} title of list widget 
 */
List.propTypes = {  
  children: PropTypes.node,
  title: PropTypes.string
}

export default List