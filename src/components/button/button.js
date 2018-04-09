import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Button = ({
  children,
  type,
  color,
  size,
  isOutlined,
  isInverted,
  isRounded,
  state,
  isStatic,
  isDisabled,
  isSelected,
  isFullWidth,
  ...props
}) => (
  // eslint-disable-next-line react/button-has-type
  <button
    type={type}
    className={classnames('button', {
      'is-white': color === 'white',
      'is-light': color === 'light',
      'is-dark': color === 'dark',
      'is-black': color === 'black',
      'is-text': color === 'text',
      'is-primary': color === 'primary',
      'is-link': color === 'link',
      'is-info': color === 'info',
      'is-success': color === 'success',
      'is-warning': color === 'warning',
      'is-danger': color === 'danger',
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-outlined': isOutlined,
      'is-inverted': isInverted,
      'is-rounded': isRounded,
      'is-hovered': state === 'hovered',
      'is-focused': state === 'focused',
      'is-active': state === 'active',
      'is-loading': state === 'loading',
      'is-static': isStatic,
      'is-selected': isSelected,
      'is-fullwidth': isFullWidth
    })}
    disabled={isDisabled}
    {...props}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.string,
  color: PropTypes.oneOf([
    'white',
    'light',
    'dark',
    'black',
    'text',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  isOutlined: PropTypes.bool,
  isInverted: PropTypes.bool,
  isRounded: PropTypes.bool,
  state: PropTypes.oneOf(['normal', 'hovered', 'focused', 'active', 'loading']),
  isStatic: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSelected: PropTypes.bool,
  isFullWidth: PropTypes.bool
}

Button.defaultProps = {
  type: 'button',
  color: null,
  size: 'normal',
  isOutlined: false,
  isInverted: false,
  isRounded: false,
  state: 'normal',
  isStatic: false,
  isDisabled: false,
  isSelected: false,
  isFullWidth: false
}

export default Button
