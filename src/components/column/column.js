import React from 'react'
import PropTypes from 'prop-types'
import {classnames, range} from '../../utils'

const columnNumbers = range(1, 12).reduce((acc, current) => {
  acc[current] = current
  return acc
}, {})

const sizesMap = {
  narrow: 'narrow',
  full: 'full',
  '1/2': 'half',
  '1/3': 'one-third',
  '2/3': 'two-thirds',
  '1/4': 'one-quarter',
  '3/4': 'three-quarters',
  '1/5': 'one-fifth',
  '2/5': 'two-fifths',
  '3/5': 'three-fifths',
  '4/5': 'four-fifths',
  ...columnNumbers
}

export const sizes = Object.keys(sizesMap)

const breakpoints = [
  'mobile',
  'tablet',
  'touch',
  'desktop',
  'widescreen',
  'fullhd'
]

export const propNames = breakpoints.reduce(
  (acc, current) => {
    acc.push(`${current}Size`)
    acc.push(`${current}Offset`)
    return acc
  },
  ['size', 'offset']
)

const propTypes = propNames.reduce((acc, current) => {
  acc[current] = PropTypes.oneOf(sizes)
  return acc
}, {})

const defaultProps = propNames.reduce((acc, current) => {
  acc[current] = null
  return acc
}, {})

const Column = ({
  children,
  size,
  mobileSize,
  tabletSize,
  touchSize,
  desktopSize,
  widescreenSize,
  fullhdSize,
  offset,
  mobileOffset,
  tabletOffset,
  touchOffset,
  desktopOffset,
  widescreenOffset,
  fullhdOffset,
  ...props
}) => (
  <div
    className={classnames('column', {
      [`is-${sizesMap[size]}`]: size !== null,
      [`is-${sizesMap[mobileSize]}-mobile`]: mobileSize !== null,
      [`is-${sizesMap[tabletSize]}-tablet`]: tabletSize !== null,
      [`is-${sizesMap[touchSize]}-touch`]: touchSize !== null,
      [`is-${sizesMap[desktopSize]}-desktop`]: desktopSize !== null,
      [`is-${sizesMap[widescreenSize]}-widescreen`]: widescreenSize !== null,
      [`is-${sizesMap[fullhdSize]}-fullhd`]: fullhdSize !== null,
      [`is-offset-${sizesMap[offset]}`]: offset !== null,
      [`is-offset-${sizesMap[mobileOffset]}-mobile`]: mobileOffset !== null,
      [`is-offset-${sizesMap[touchOffset]}-mobile`]: touchOffset !== null,
      [`is-offset-${sizesMap[tabletOffset]}-tablet`]: tabletOffset !== null,
      [`is-offset-${sizesMap[desktopOffset]}-desktop`]: desktopOffset !== null,
      [`is-offset-${sizesMap[widescreenOffset]}-widescreen`]:
        widescreenOffset !== null,
      [`is-offset-${sizesMap[fullhdOffset]}-fullhd`]: fullhdOffset !== null
    })}
    {...props}
  >
    {children}
  </div>
)

Column.propTypes = {
  children: PropTypes.node.isRequired,
  ...propTypes
}

Column.defaultProps = defaultProps

export default Column
