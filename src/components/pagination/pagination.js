import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'
import Previous from './previous'
import Next from './next'
import List from './list'
import Ellipsis from './ellipsis'
import Link from './link'

const Pagination = ({children, position, isRounded, size, ...props}) => (
  <nav
    className={classnames('pagination', {
      'is-centered': position === 'center',
      'is-right': position === 'right',
      'is-rounded': isRounded,
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large'
    })}
    {...props}
  >
    {children}
  </nav>
)

Pagination.propTypes = {
  children: PropTypes.node.isRequired,
  isRounded: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large', 'normal']),
  position: PropTypes.oneOf(['left', 'center', 'right'])
}

Pagination.defaultProps = {
  isRounded: false,
  size: 'normal',
  position: 'left'
}

Pagination.Previous = Previous
Pagination.Next = Next
Pagination.List = List
Pagination.Ellipsis = Ellipsis
Pagination.Link = Link

export default Pagination
