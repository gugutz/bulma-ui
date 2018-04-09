import React from 'react'
import PropTypes from 'prop-types'

const Box = ({children, ...props}) => (
  <div className="box" {...props}>
    {children}
  </div>
)

Box.propTypes = {
  children: PropTypes.node.isRequired
}

export default Box
