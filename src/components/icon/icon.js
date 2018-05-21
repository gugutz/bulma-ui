import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Icon = ({children, color, size, ...props}) => (
  <span
    className={classnames('icon', {
      [`has-text-${color}`]: color !== null,
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large'
    })}
    {...props}
  >
    {children}
  </span>
)

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'white',
    'black',
    'light',
    'dark',
    'primary',
    'info',
    'link',
    'success',
    'warning',
    'danger',
    'black-bis',
    'black-ter',
    'grey-darker',
    'grey-dark',
    'grey',
    'grey-light',
    'grey-lighter',
    'white-ter',
    'white-bis'
  ]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large'])
}

Icon.defaultProps = {
  color: null,
  size: 'normal'
}

export default Icon
