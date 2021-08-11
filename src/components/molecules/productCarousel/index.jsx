import React, { useState } from 'react'
import PropTypes from 'prop-types'

import styles from './productCarousel.module.scss'

export const ProductCarousel = ({ items }) => {
  const [selectedItem, setSelectedItem] = useState(0)

  return (
    <div className={styles.container}>
      {items.map((item, i) => (
        <input
          key={i}
          id={`item-${i}`}
          checked={selectedItem === i}
          onChange={() => setSelectedItem(i)}
          type="radio"
          name="slider"
          className={styles[`radio-${i}`]}
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
}

ProductCarousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    })
  ).isRequired
}

export default ProductCarousel
