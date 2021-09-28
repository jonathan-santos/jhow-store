import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'
import Image from 'next/image'

import IconHeartFull from '../../../../public/icons/heart-full.svg'
import IconHeartHalf from '../../../../public/icons/heart-half.svg'

import styles from './heart.module.scss'

export const Heart = ({ fill, toggle, background, className }) => (
  <button
    className={classnames(styles.heart, className, {
      [styles.background]: background
    })}
    onClick={toggle}>
    <Image src={fill ? IconHeartFull : IconHeartHalf} className={styles.icon} />
  </button>
)

Heart.defaultProps = {
  fill: false,
  toggle: null,
  background: false,
  className: ''
}

Heart.propTypes = {
  fill: PropTypes.bool,
  toggle: PropTypes.func,
  background: PropTypes.bool,
  className: PropTypes.string
}

export default Heart
