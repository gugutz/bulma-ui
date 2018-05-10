import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Textarea = ({
  children,
  color,
  size,
  state,
  isRounded,
  multiple,
  ...props
}) => (
  <div
    className={classnames('select', {
      'is-primary': color === 'primary',
      'is-info': color === 'info',
      'is-success': color === 'success',
      'is-warning': color === 'warning',
      'is-danger': color === 'danger',
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-loading': state === 'loading',
      'is-rounded': isRounded,
      'is-multiple': Boolean(multiple)
    })}
  >
    <select
      className={classnames('', {
        'is-hovered': state === 'hovered',
        'is-focused': state === 'focused'
      })}
      multiple={Boolean(multiple)}
      size={multiple}
      {...props}
    >
      {children}
    </select>
  </div>
)

Textarea.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'default'
  ]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  state: PropTypes.oneOf(['hovered', 'focused', 'normal', 'loading']),
  isRounded: PropTypes.bool,
  multiple: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
}

Textarea.defaultProps = {
  color: 'default',
  size: 'normal',
  state: 'normal',
  isRounded: false,
  multiple: false
}

export default Textarea
