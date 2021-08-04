import React from 'react'
import PropTypes from 'prop-types'

import { Star } from '../../'

import styles from './rating.module.scss'

export const Rating = (props) => {
  const { value, change } = props

  const arrayOf5 = [1, 2, 3, 4, 5]

  const onStarToggle = (starValue) => {
    if (value !== starValue) {
      change(starValue)
    }
  }

  return (
    <div className={styles.rating}>
      {arrayOf5.map((starValue) => (
        <Star
          key={starValue}
          state={value >= starValue ? 'full' : 'empty'}
          size="big"
          toggle={value !== starValue ? () => onStarToggle(starValue) : null}
        />
      ))}
    </div>
  )
}

Rating.defaultProps = {
  change: null,
  default: 'small'
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  change: PropTypes.func
}

export default Rating
