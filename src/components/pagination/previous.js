import React from 'react'
import PropTypes from 'prop-types'

const Previous = ({children, ...props}) => (
  <a className="pagination-previous" {...props}>
    {children}
  </a>
)

Previous.propTypes = {
  children: PropTypes.node.isRequired
}

export default Previous
