import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './button.module.scss'

export const Button = (props) => {
  const { children, className, color, secondary, bottom, rounded } = props

  const classNames = classnames(className, styles.button, styles[color], {
    [styles.secondary]: secondary,
    [styles.bottom]: bottom,
    [styles.rounded]: rounded
  })

  return (
    <button {...props} className={classNames}>
      {children}
    </button>
  )
}

Button.defaultProps = {
  className: '',
  color: 'primary',
  secondary: false,
  bottom: false,
  rounded: false,
  disabled: false,
  onClick: null,
  type: 'button'
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'positive', 'negative', 'in-dark']),
  secondary: PropTypes.bool,
  bottom: PropTypes.bool,
  rounded: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset'])
}

export default Button
