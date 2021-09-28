import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './text.module.scss'

export const Text = (props) => {
  const { children, type, color, className } = props

  const TextElement = type

  const classNames = classnames(
    className,
    styles.text,
    styles[type],
    styles[color]
  )

  return (
    <TextElement {...props} className={classNames}>
      {children}
    </TextElement>
  )
}

Text.defaultProps = {
  type: 'p',
  color: 'dark',
  className: ''
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(['p', 'span']),
  color: PropTypes.oneOf(['dark', 'light']),
  className: PropTypes.string
}

export default Text
