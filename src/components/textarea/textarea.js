import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Textarea = ({
  children,
  disabled,
  readOnly,
  color,
  size,
  state,
  isStatic,
  ...props
}) => (
  <textarea
    disabled={disabled}
    readOnly={readOnly}
    className={classnames('textarea', {
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
  >
    {children}
  </textarea>
)

Textarea.propTypes = {
  children: PropTypes.node.isRequired,
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

Textarea.defaultProps = {
  disabled: false,
  readOnly: false,
  color: 'default',
  size: 'normal',
  state: 'normal',
  isStatic: false
}

export default Textarea
