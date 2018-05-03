import React from 'react'
import PropTypes from 'prop-types'

const Content = ({children, ...props}) => (
  <div className="card-content" {...props}>
    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node.isRequired
}

export default Content
