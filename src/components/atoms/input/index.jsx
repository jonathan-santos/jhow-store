import React from 'react'
import PropTypes from 'prop-types'

import IconDelete from '../../../public/icons/icon-delete.svg'

import styles from './input.module.scss'

export const Input = (props) => (
  <div className={styles.container}>
    <input {...props} className={styles.input} />

    {props.value && (
      <img
        src={IconDelete}
        className={styles.iconDelete}
        onClick={props.clear}
      />
    )}
  </div>
)

Input.defaultProps = {
  placeholder: 'Type something...',
  value: '',
  clear: null
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  clear: PropTypes.func
}

export default Input
