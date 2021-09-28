import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import styles from './title.module.scss'

export const Title = (props) => {
  const { children, level, className } = props

  const TitleElement = `h${level}`

  const classNames = classnames(styles.title, styles[`h${level}`], className)

  return (
    <TitleElement {...props} className={classNames}>
      {children}
    </TitleElement>
  )
}

Title.defaultProps = {
  level: '1',
  className: ''
}

Title.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  className: PropTypes.string
}

export default Title
