import React from 'react'
import PropTypes from 'prop-types'

import RadioUncheckedIcon from '../../../../public/icons/radio-unchecked.svg'
import RadioCheckedIcon from '../../../../public/icons/radio-checked.svg'

import styles from './radioOption.module.scss'

export const RadioOption = (props) => {
  const { title, description, onSelect, selected } = props

  return (
    <label className={styles['radio-option']}>
      <input {...props} type="radio" hidden onChange={onSelect} />

      <img
        className={styles.radio}
        src={selected ? RadioCheckedIcon : RadioUncheckedIcon}
      />

      <span className={styles.title}>{title}: </span>

      <span className={styles.description}>{description}</span>
    </label>
  )
}

RadioOption.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
  selected: PropTypes.bool.isRequired
}

export default RadioOption
