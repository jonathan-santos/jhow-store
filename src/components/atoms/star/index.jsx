import React from 'react'
import PropTypes from 'prop-types'

import IconStarEmpty from '../../../public/icons/star-empty.svg'
import IconStarHalf from '../../../public/icons/star-half.svg'
import IconStarFull from '../../../public/icons/star-full.svg'

import styles from './star.module.scss'

export const Star = ({ state, toggle }) => {
  const img = {
    empty: IconStarEmpty,
    half: IconStarHalf,
    full: IconStarFull
  }

  return (
    <button className={styles.star} onClick={toggle}>
      <img src={img[state]} />
    </button>
  )
}

Star.defaultProps = {
  state: 'empty',
  toggle: null
}

Star.propTypes = {
  state: PropTypes.oneOf(['empty', 'half', 'full']),
  toggle: PropTypes.func
}

export default Star
