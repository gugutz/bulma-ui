import React from 'react'
import PropTypes from 'prop-types'

const Ellipsis = ({children, ...props}) => (
  <span className="pagination-ellipsis" {...props}>
    {children}
  </span>
)

Ellipsis.propTypes = {
  children: PropTypes.node.isRequired
}

export default Ellipsis
