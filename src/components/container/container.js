import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Container = ({children, isFluid, isWidescreen, isFullhd, ...props}) => (
  <div
    className={classnames('container', {
      'is-fluid': isFluid,
      'is-widescreen': isWidescreen,
      'is-fullhd': isFullhd
    })}
    {...props}
  >
    {children}
  </div>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
  isFluid: PropTypes.bool,
  isWidescreen: PropTypes.bool,
  isFullhd: PropTypes.bool
}

Container.defaultProps = {
  isFluid: false,
  isWidescreen: false,
  isFullhd: false
}

export default Container
