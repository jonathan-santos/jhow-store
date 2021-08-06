import React from 'react'
import PropTypes from 'prop-types'

import styles from './productCarousel.module.scss'

export const ProductCarousel = ({ items }) => (
  <div className={styles['product-carousel']}>
    {items.map((item, i) => (
      <img key={i} src={item.src} alt={item.alt} />
    ))}
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
