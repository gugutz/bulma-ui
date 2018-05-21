import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const FA = ({name, size, isFixedWidth, isBordered, ...props}) => (
  <i
    className={classnames(`fas fa-${name}`, {
      [`fa-${size}`]: size !== null,
      'fa-fw': isFixedWidth
    })}
    {...props}
  />
)

FA.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf([
    'xs',
    'sm',
    'lg',
    '2x',
    '3x',
    '4x',
    '5x',
    '6x',
    '7x',
    '8x',
    '9x',
    '10x'
  ]),
  isFixedWidth: PropTypes.bool
}

FA.defaultProps = {
  size: null,
  isFixedWidth: false
}

export default FA
