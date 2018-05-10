import React from 'react'
import PropTypes from 'prop-types'

const Radio = ({children, disabled, checked, ...props}) => (
  <label className="radio" disabled={disabled}>
    <input type="radio" disabled={disabled} checked={checked} {...props}/>
    {children}
  </label>
)

Radio.propTypes = {
  children: PropTypes.node.isRequired,
  disabled: PropTypes.bool,
  checked: PropTypes.bool
}

Radio.defaultProps = {
  disabled: false,
  checked: false
}

export default Radio
