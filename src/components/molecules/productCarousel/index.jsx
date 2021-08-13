import React from 'react'
import PropTypes from 'prop-types'

import styles from './productCarousel.module.scss'

export const ProductCarousel = ({ items }) => (
  <div className={styles.container}>
    {items.map((item, i) => (
      <input
        key={i}
        id={`item-${i}`}
        type="radio"
        name="slider"
        className={styles[`radio-${i}`]}
        defaultChecked={i === 0}
      />
    ))}

    <div className={styles.items}>
      {items.map((item, i) => (
        <label
          key={i}
          htmlFor={`item-${i}`}
          className={`${styles.item} ${styles[`item-${i}`]}`}>
          <img src={item.src} alt={item.alt} />
        </label>
      ))}
    </div>
  </div>
)

ProductCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ).isRequired
}

export default ProductCarousel
