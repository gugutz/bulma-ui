import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'
import Item from './item'
import Left from './left'
import Right from './right'

const Level = ({children, isMobile, ...props}) => (
  <div
    className={classnames('level', {
      'is-mobile': isMobile
    })}
    {...props}
  >
    {children}
  </div>
)

Level.propTypes = {
  children: PropTypes.node.isRequired,
  isMobile: PropTypes.bool
}

Level.defaultProps = {
  isMobile: false
}

Level.Item = Item
Level.Left = Left
Level.Right = Right

export default Level
