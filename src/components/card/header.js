import React from 'react'
import PropTypes from 'prop-types'
import {classnames} from '../../utils'

const Icon = ({children, ...props}) => (
  <a className="card-header-icon" type="button" {...props}>
    {children}
  </a>
)

Icon.propTypes = {
  children: PropTypes.node.isRequired
}

const Title = ({children, isCentered, ...props}) => (
  <p
    className={classnames('card-header-title', {'is-centered': isCentered})}
    {...props}
  >
    {children}
  </p>
)

Title.propTypes = {
  children: PropTypes.node.isRequired,
  isCentered: PropTypes.bool
}

Title.defaultProps = {
  isCentered: false
}

const Header = ({children, ...props}) => (
  <header className="card-header" {...props}>
    {children}
  </header>
)

Header.propTypes = {
  children: PropTypes.node.isRequired
}

Header.Title = Title
Header.Icon = Icon

export default Header
