import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Notification = ({
  children,
  isPrimary,
  isLink,
  isInfo,
  isSuccess,
  isWarning,
  isDanger,
  ...props
}) => (
  <div
    className={classnames('notification', {
      'is-primary': isPrimary,
      'is-link': isLink,
      'is-info': isInfo,
      'is-success': isSuccess,
      'is-warning': isWarning,
      'is-danger': isDanger
    })}
    {...props}
  >
    {children}
  </div>
)

Notification.propTypes = {
  children: PropTypes.node.isRequired,
  isPrimary: PropTypes.bool,
  isLink: PropTypes.bool,
  isInfo: PropTypes.bool,
  isSuccess: PropTypes.bool,
  isWarning: PropTypes.bool,
  isDanger: PropTypes.bool
}

Notification.defaultProps = {
  isPrimary: false,
  isLink: false,
  isInfo: false,
  isSuccess: false,
  isWarning: false,
  isDanger: false
}

export default Notification
