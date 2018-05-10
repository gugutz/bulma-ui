import React from 'react'
import PropTypes from 'prop-types'

const Label = ({children, ...props}) => (
  <label className="label" {...props}>
    {children}
  </label>
)

Label.propTypes = {
  children: PropTypes.node.isRequired
}

export default Label
