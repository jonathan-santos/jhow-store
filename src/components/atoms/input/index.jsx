import React from 'react'
import PropTypes from 'prop-types'

import styles from './input.module.scss'

export const Input = (props) => <input {...props} className={styles.input} />

Input.defaultProps = {
  placeholder: 'Type something...'
}

Input.propTypes = {
  placeholder: PropTypes.string
}

export default Input
