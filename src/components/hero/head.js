import React from 'react'
import PropTypes from 'prop-types'

const Head = ({children, ...props}) => (
  <div className="hero-head" {...props}>
    {children}
  </div>
)

Head.propTypes = {
  children: PropTypes.node.isRequired
}

export default Head
