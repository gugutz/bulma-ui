import React from 'react'
import PropTypes from 'prop-types'
import {classnames, range} from '../../utils'

const Tile = ({
  children,
  isAncestor,
  isParent,
  isChild,
  isVertical,
  size,
  ...props
}) => (
  <div
    className={classnames('tile', {
      'is-ancestor': isAncestor,
      'is-parent': isParent,
      'is-child': isChild,
      'is-vertical': isVertical,
      [`is-${size}`]: size !== null
    })}
    {...props}
  >
    {children}
  </div>
)

Tile.propTypes = {
  children: PropTypes.node.isRequired,
  isAncestor: PropTypes.bool,
  isParent: PropTypes.bool,
  isChild: PropTypes.bool,
  isVertical: PropTypes.bool,
  size: PropTypes.oneOf(range(1, 13))
}

Tile.defaultProps = {
  isAncestor: false,
  isParent: false,
  isChild: false,
  isVertical: false,
  size: null
}

export default Tile
