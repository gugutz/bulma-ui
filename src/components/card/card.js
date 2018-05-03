import React from 'react'
import PropTypes from 'prop-types'
import Header from './header'
import Image from './image'
import Content from './content'
import Footer from './footer'

const Card = ({children, ...props}) => (
  <div className="card" {...props}>
    {children}
  </div>
)

Card.propTypes = {
  children: PropTypes.node.isRequired
}

Card.Header = Header
Card.Image = Image
Card.Content = Content
Card.Footer = Footer

export default Card
