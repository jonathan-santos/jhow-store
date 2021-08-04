import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import IconStarEmpty from '../../../public/icons/star-empty.svg'
import IconStarHalf from '../../../public/icons/star-half.svg'
import IconStarFull from '../../../public/icons/star-full.svg'

import styles from './star.module.scss'

export const Star = ({ state, toggle, size }) => {
  const classNames = classnames(styles.star, {
    [styles.selectable]: toggle !== null
  })

  const img = {
    empty: IconStarEmpty,
    half: IconStarHalf,
    full: IconStarFull
  }

  const imgSize = {
    small: '25',
    big: '40'
  }

  return (
    <button className={classNames} onClick={toggle}>
      <img src={img[state]} width={imgSize[size]} />
    </button>
  )
}

Star.defaultProps = {
  state: 'empty',
  size: 'small',
  toggle: null
}

Star.propTypes = {
  state: PropTypes.oneOf(['empty', 'half', 'full']),
  size: PropTypes.oneOf(['small', 'big']),
  toggle: PropTypes.func
}

export default Star
