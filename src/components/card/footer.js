import React from 'react'
import PropTypes from 'prop-types'

const Item = ({children, ...props}) => (
  <p className="card-footer-item" type="button" {...props}>
    {children}
  </p>
)

Item.propTypes = {
  children: PropTypes.node.isRequired
}

const Footer = ({children, ...props}) => (
  <footer className="card-footer" {...props}>
    {children}
  </footer>
)

Footer.propTypes = {
  children: PropTypes.node.isRequired
}

Footer.Item = Item

export default Footer
