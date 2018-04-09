import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Content = ({children, size, ...props}) => (
  <div
    className={classnames('content', {
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large'
    })}
    {...props}
  >
    {children}
  </div>
)

Content.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large'])
}

Content.defaultProps = {
  size: 'normal'
}

export default Content
