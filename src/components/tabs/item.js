import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Item = ({children, isActive, ...props}) => (
  <li className={classnames('', {'is-active': isActive})} {...props}>
    <a>{children}</a>
  </li>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  isActive: PropTypes.bool
}

Item.defaultProps = {
  isActive: false
}

export default Item
