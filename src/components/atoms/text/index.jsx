import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './text.module.scss'

export const Text = (props) => {
  const { children, as, color, bold, className } = props

  const TextElement = as

  const classNames = classnames(
    className,
    styles.text,
    styles[as],
    styles[color],
    { [styles.bold]: bold }
  )

  return (
    <TextElement {...props} className={classNames}>
      {children}
    </TextElement>
  )
}

Text.defaultProps = {
  as: 'p',
  color: 'dark',
  bold: false,
  className: ''
}

Text.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['p', 'span']),
  color: PropTypes.oneOf(['dark', 'light']),
  bold: PropTypes.bool,
  className: PropTypes.string
}

export default Text
