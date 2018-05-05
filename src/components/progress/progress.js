import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Progress = ({value, color, size, ...props}) => (
  <progress
    className={classnames('progress', {
      'is-primary': color === 'primary',
      'is-link': color === 'link',
      'is-info': color === 'info',
      'is-success': color === 'success',
      'is-warning': color === 'warning',
      'is-danger': color === 'danger',
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large'
    })}
    value={value}
    max="100"
    {...props}
  >
    {value + '%'}
  </progress>
)

Progress.propTypes = {
  value: PropTypes.number.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ]),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large'])
}

Progress.defaultProps = {
  color: null,
  size: 'normal'
}

export default Progress
