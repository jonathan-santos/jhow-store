import React from 'react'
import PropTypes from 'prop-types'

import IconHeartFull from '../../../../public/icons/heart-full.svg'
import IconHeartHalf from '../../../../public/icons/heart-half.svg'

import styles from './heart.module.scss'

export const Heart = ({ fill, toggle }) => (
  <button className={styles.heart} onClick={toggle}>
    <img src={fill ? IconHeartFull : IconHeartHalf} />
  </button>
)

Heart.defaultProps = {
  fill: false,
  toggle: null
}

Heart.propTypes = {
  fill: PropTypes.bool,
  toggle: PropTypes.func
}

export default Heart
