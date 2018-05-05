import React from 'react'
import PropTypes from 'prop-types'

const Next = ({children, ...props}) => (
  <a className="pagination-next" {...props}>
    {children}
  </a>
)

Next.propTypes = {
  children: PropTypes.node.isRequired
}

Next.defaultProps = {}

export default Next
