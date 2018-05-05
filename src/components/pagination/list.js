import React from 'react'
import PropTypes from 'prop-types'

const List = ({children, ...props}) => (
  <ul className="pagination-list" {...props}>
    {children}
  </ul>
)

List.propTypes = {
  children: PropTypes.node.isRequired
}

export default List
