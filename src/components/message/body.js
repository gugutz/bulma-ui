import React from 'react'
import PropTypes from 'prop-types'

const Body = ({children, ...props}) => (
  <div className="message-body" {...props}>
    {children}
  </div>
)

Body.propTypes = {
  children: PropTypes.node.isRequired
}

export default Body
