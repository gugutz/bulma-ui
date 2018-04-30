import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'
import Head from './head'
import Body from './body'
import Foot from './foot'

const Hero = ({children, color, size, isBold, ...props}) => (
  <div
    className={classnames('hero', {
      'is-primary': color === 'primary',
      'is-info': color === 'info',
      'is-success': color === 'success',
      'is-warning': color === 'warning',
      'is-danger': color === 'danger',
      'is-light': color === 'light',
      'is-dark': color === 'dark',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-fullheight': size === 'fullheight',
      'is-bold': isBold
    })}
    {...props}
  >
    {children}
  </div>
)

Hero.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf([
    'primary',
    'info',
    'success',
    'warning',
    'danger',
    'light',
    'dark'
  ]),
  isBold: PropTypes.bool,
  size: PropTypes.oneOf(['medium', 'large', 'fullheight'])
}

Hero.defaultProps = {
  color: null,
  isBold: false,
  size: null
}

Hero.Head = Head
Hero.Body = Body
Hero.Foot = Foot

export default Hero
