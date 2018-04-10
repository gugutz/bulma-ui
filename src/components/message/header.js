import React from 'react'
import PropTypes from 'prop-types'

const Header = ({children, ...props}) => (
  <div className="message-header" {...props}>
    {children}
  </div>
)

Header.propTypes = {
  children: PropTypes.node.isRequired
}

Header.defaultProps = {}

export default Header
