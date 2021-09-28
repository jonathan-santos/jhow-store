import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Star } from '../../'

import styles from './rating.module.scss'

export const Rating = ({ value, change, size, background, className }) => {
  const classNames = classnames(styles.rating, className, {
    [styles.background]: background
  })

  const arrayOf5 = [1, 2, 3, 4, 5]

  const onStarToggle = (starValue) => {
    if (value !== starValue) {
      change(starValue)
    }
  }

  return (
    <div className={classNames}>
      {arrayOf5.map((starValue) => (
        <Star
          key={starValue}
          state={value >= starValue ? 'full' : 'empty'}
          size={size}
          toggle={value !== starValue ? () => onStarToggle(starValue) : null}
        />
      ))}
    </div>
  )
}

Rating.defaultProps = {
  change: null,
  size: 'big',
  background: false,
  className: ''
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  change: PropTypes.func,
  size: PropTypes.string,
  background: PropTypes.bool,
  className: PropTypes.string
}

export default Rating
