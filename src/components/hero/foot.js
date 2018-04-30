import React from 'react'
import PropTypes from 'prop-types'

const Foot = ({children, ...props}) => (
  <div className="hero-foot" {...props}>
    {children}
  </div>
)

Foot.propTypes = {
  children: PropTypes.node.isRequired
}

export default Foot
