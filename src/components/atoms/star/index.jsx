import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Image from 'next/image'

import StarEmptyIcon from '../../../../public/icons/star-empty.svg'
import StarHalfIcon from '../../../../public/icons/star-half.svg'
import StarFullIcon from '../../../../public/icons/star-full.svg'

import styles from './star.module.scss'

export const Star = ({ state, toggle, size }) => {
  const classNames = classnames(styles.star, {
    [styles.selectable]: toggle !== null
  })

  const img = {
    empty: StarEmptyIcon,
    half: StarHalfIcon,
    full: StarFullIcon
  }

  const imgSize = {
    small: '25',
    big: '40'
  }

  return (
    <button className={classNames} onClick={toggle}>
      <Image src={img[state]} width={imgSize[size]} height={imgSize[size]} />
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
