import React from 'react'
import PropTypes from 'prop-types'

import IconRadioUnChecked from '../../../public/icons/radio-unchecked.svg'
import IconRadioChecked from '../../../public/icons/radio-checked.svg'

import styles from './radio.module.scss'

export const Radio = (props) => {
  const { id, toggle, checked } = props

  return (
    <label className={styles.radio} htmlFor={id}>
      <input
        {...props}
        id={id}
        name={id}
        type="radio"
        hidden
        onChange={toggle}
      />

      <img src={checked ? IconRadioChecked : IconRadioUnChecked} />
    </label>
  )
}

Radio.defaultProps = {
  checked: false,
  toggle: null
}

Radio.propTypes = {
  id: PropTypes.string.isRequired,
  checked: PropTypes.bool,
  toggle: PropTypes.func
}

export default Radio
