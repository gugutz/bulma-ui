import React from 'react'
import PropTypes from 'prop-types'

const Image = ({children, ...props}) => (
  <div className="card-image" {...props}>
    {children}
  </div>
)

Image.propTypes = {
  children: PropTypes.node.isRequired
}

export default Image
