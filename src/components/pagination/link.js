import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Link = ({children, isCurrent, ...props}) => (
  <a
    className={classnames('pagination-link', {
      'is-current': isCurrent
    })}
    {...props}
  >
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.node.isRequired,
  isCurrent: PropTypes.bool
}

Link.defaultProps = {
  isCurrent: false
}

export default Link
