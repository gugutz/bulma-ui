import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Section = ({children, size, ...props}) => (
  <div
    className={classnames('section', {
      'is-medium': size === 'medium',
      'is-large': size === 'large'
    })}
    {...props}
  >
    {children}
  </div>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['normal', 'medium', 'large'])
}

Section.defaultProps = {
  size: 'normal'
}

export default Section
