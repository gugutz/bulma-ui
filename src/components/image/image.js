import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

export const sizes = [
  '16x16',
  '24x24',
  '48x48',
  '64x64',
  '96x96',
  '128x128',
  'square',
  '1by1',
  '5by4',
  '4by3',
  '3by2',
  '5by3',
  '16by9',
  '2by1',
  '3by1',
  '4by5',
  '3by4',
  '2by3',
  '3by5',
  '9by16',
  '1by2',
  '1by3'
]

const Image = ({size, src, alt, ...props}) => (
  <figure className={classnames('image', {[`is-${size}`]: size !== null})}>
    <img src={src} alt={alt} {...props}/>
  </figure>
)

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  size: PropTypes.oneOf(sizes)
}

Image.defaultProps = {
  size: null
}

export default Image
