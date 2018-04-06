import React from 'react'
import PropTypes from 'prop-types'
import {classnames, range} from '../../utils'

const Columns = ({
  children,
  isCentered,
  isMobile,
  isDesktop,
  isGapless,
  isMultiline,
  gap,
  ...props
}) => (
  <div
    className={classnames('columns', {
      'is-centered': isCentered,
      'is-mobile': isMobile,
      'is-desktop': isDesktop,
      'is-gapless': isGapless,
      'is-multiline': isMultiline,
      [`is-variable is-${gap}`]: gap !== null
    })}
    {...props}
  >
    {children}
  </div>
)

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool,
  isMobile: PropTypes.bool,
  isDesktop: PropTypes.bool,
  isGapless: PropTypes.bool,
  isMultiline: PropTypes.bool,
  gap: PropTypes.oneOf(range(0, 9))
}

Columns.defaultProps = {
  isCentered: false,
  isMobile: false,
  isDesktop: false,
  isGapless: false,
  isMultiline: false,
  gap: null
}

export default Columns
