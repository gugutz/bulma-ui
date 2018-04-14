import React from 'react'
import PropTypes from 'prop-types'

const Left = ({children, ...props}) => (
  <div className="level-left" {...props}>
    {children}
  </div>
)

Left.propTypes = {
  children: PropTypes.node.isRequired
}

export default Left
