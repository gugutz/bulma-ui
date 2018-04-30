import React from 'react'
import PropTypes from 'prop-types'
import Right from './right'
import Left from './left'
import Content from './content'

const Media = ({children, ...props}) => (
  <div className="media" {...props}>
    {children}
  </div>
)

Media.propTypes = {
  children: PropTypes.node.isRequired
}

Media.Right = Right
Media.Left = Left
Media.Content = Content

export default Media
