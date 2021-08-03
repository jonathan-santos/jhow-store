import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconDelete from '../../../public/icons/icon-delete.svg'

import styles from './input.module.scss'

export const Input = (props) => {
  const containerClassnames = classnames(
    styles.container,
    props.containerClassName
  )

  const inputClassnames = classnames(styles.input, props.className)

  return (
    <div className={containerClassnames}>
      <input {...props} className={inputClassnames} />

      {props.value && !props.hideDelete && (
        <img
          src={IconDelete}
          className={styles.iconDelete}
          onClick={props.clear}
        />
      )}
    </div>
  )
}

Input.defaultProps = {
  placeholder: 'Type something...',
  value: '',
  clear: null,
  className: '',
  containerClassName: '',
  hideDelete: false
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  clear: PropTypes.func,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  hideDelete: PropTypes.bool
}

export default Input
