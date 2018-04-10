import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'
import Body from './body'
import Header from './header'

const Message = ({children, size, color, ...props}) => (
  <article
    className={classnames('message', {
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-dark': color === 'dark',
      'is-primary': color === 'primary',
      'is-link': color === 'link',
      'is-info': color === 'info',
      'is-success': color === 'success',
      'is-warning': color === 'warning',
      'is-danger': color === 'danger'
    })}
    {...props}
  >
    {children}
  </article>
)

Message.Body = Body
Message.Header = Header

Message.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  color: PropTypes.oneOf([
    'dark',
    'primary',
    'link',
    'info',
    'success',
    'warning',
    'danger'
  ])
}

Message.defaultProps = {
  size: 'normal',
  color: null
}

export default Message
