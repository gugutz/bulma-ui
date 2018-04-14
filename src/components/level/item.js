import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Item = ({children, hasTextCentered, isNarrow, ...props}) => (
  <div
    className={classnames('level-item', {
      'has-text-centered': hasTextCentered,
      'is-narrow': isNarrow
    })}
    {...props}
  >
    {children}
  </div>
)

Item.propTypes = {
  children: PropTypes.node.isRequired,
  hasTextCentered: PropTypes.bool,
  isNarrow: PropTypes.bool
}

Item.defaultProps = {
  hasTextCentered: false,
  isNarrow: false
}

export default Item
