import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'
import Item from './item'

const Tabs = ({
  children,
  position,
  size,
  isBoxed,
  isToggle,
  isToggleRounded,
  isFullwidth,
  ...props
}) => (
  <div
    className={classnames('tabs', {
      'is-right': position === 'right',
      'is-centered': position === 'center',
      'is-small': size === 'small',
      'is-medium': size === 'medium',
      'is-large': size === 'large',
      'is-boxed': isBoxed,
      'is-toggle': isToggle,
      'is-toggle-rounded': isToggleRounded,
      'is-fullwidth': isFullwidth
    })}
    {...props}
  >
    <ul>{children}</ul>
  </div>
)

Tabs.propTypes = {
  children: PropTypes.node.isRequired,
  position: PropTypes.oneOf(['right', 'left', 'center']),
  size: PropTypes.oneOf(['small', 'normal', 'medium', 'large']),
  isBoxed: PropTypes.bool,
  isToggle: PropTypes.bool,
  isToggleRounded: PropTypes.bool,
  isFullwidth: PropTypes.bool
}

Tabs.defaultProps = {
  position: 'left',
  size: 'normal',
  isBoxed: false,
  isToggle: false,
  isToggleRounded: false,
  isFullwidth: false
}

Tabs.Item = Item

export default Tabs
