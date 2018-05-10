import React from 'react'
import PropTypes from 'prop-types'

const Checkbox = ({children, disabled, ...props}) => (
  <label className="checkbox" disabled={disabled}>
    <input type="checkbox" disabled={disabled} {...props}/>
    {children}
  </label>
)

Checkbox.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool
}

Checkbox.defaultProps = {
  disabled: false
}

export default Checkbox
