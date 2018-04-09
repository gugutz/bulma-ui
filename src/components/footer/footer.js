import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({children, ...props}) => (
  <div className="footer" {...props}>
    {children}
  </div>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

export default Footer
