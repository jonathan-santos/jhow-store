import React from 'react'
import PropTypes from 'prop-types'

import IconRadioUnChecked from '../../../public/icons/radio-unchecked.svg'
import IconRadioChecked from '../../../public/icons/radio-checked.svg'

import styles from './radio.module.scss'

export const Radio = ({ id, checked }) => (
  <div>
    <input id={id} name={id} type="radio" className={styles.radio} />

    <label>
      <img src={checked ? IconRadioChecked : IconRadioUnChecked} />
    </label>
  </div>
)

Radio.defaultProps = {
  id: '1',
  checked: false
}

Radio.propTypes = {
  id: PropTypes.string,
  checked: PropTypes.bool
}

export default Radio
