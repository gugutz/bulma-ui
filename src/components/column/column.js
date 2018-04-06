import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Column = ({isOneThird, children, isHalf}) => (
  <div
    className={classnames('column', {
      'is-one-third': isOneThird,
      'is-half': isHalf
    })}
  >
    {children}
  </div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  isOneThird: PropTypes.bool,
  isHalf: PropTypes.bool
}

Column.defaultProps = {
  isOneThird: false,
  isHalf: false
}

export default Column
