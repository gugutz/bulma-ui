import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Input = ({
  type,
  disabled,
  readOnly,
  color,
  size,
  state,
  isStatic,
  ...props
}) => (
  <input
    type={type}
    disabled={disabled}
    readOnly={readOnly}
    className={classnames('input', {
      'is-primary': color === 'primary',
      'is-info': color === 'info',
      'is-success': color === 'success',
      'is-warning': color === 'warning',
      'is-danger': color === 'danger',
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-hovered': state === 'hovered',
      'is-focused': state === 'focused',
      'is-static': isStatic
    })}
    {...props}
  />
)

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email', 'tel']),
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'default'
  ]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  state: PropTypes.oneOf(['hovered', 'focused', 'normal']),
  isStatic: PropTypes.bool
}

Input.defaultProps = {
  type: 'text',
  disabled: false,
  readOnly: false,
  color: 'default',
  size: 'normal',
  state: 'normal',
  isStatic: false
}

export default Input
