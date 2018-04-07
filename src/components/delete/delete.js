import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Delete = ({isSmall, isMedium, isLarge, ...props}) => (
  <button
    type="button"
    className={classnames('delete', {
      'is-small': isSmall,
      'is-medium': isMedium,
      'is-large': isLarge
    })}
    {...props}
  />
)

Delete.propTypes = {
  isSmall: PropTypes.bool,
  isMedium: PropTypes.bool,
  isLarge: PropTypes.bool
}

Delete.defaultProps = {
  isSmall: false,
  isMedium: false,
  isLarge: false
}

export default Delete
