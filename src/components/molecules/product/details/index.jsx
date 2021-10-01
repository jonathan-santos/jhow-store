import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import { Title, Text, Heart, Rating } from '../../../'

import styles from '../product.module.scss'

export const ProductDetails = ({
  image,
  name,
  description,
  price,
  rating,
  isWishlisted
}) => (
  <div className={styles['product-details']}>
    <div className={styles.image}>
      <Image
        src={image}
        alt={name}
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAFUlEQVR42mNkKLlZz0AEYBxVSF+FAKjoEgNlnulGAAAAAElFTkSuQmCC"
        layout="intrinsic"
        width="200"
        height="200"
      />
    </div>

    <div className={styles.information}>
      <div className={styles['title-area']}>
        <Title level="2" className={styles.title}>
          {name}
        </Title>

        <Heart fill={isWishlisted} className={styles.wishlist} background />
      </div>

      <Text className={styles.description}>{description}</Text>

      <div className={styles.details}>
        <Text className={styles.price}>{price}</Text>

        <Rating value={rating} size="small" background />
      </div>
    </div>
  </div>
)

ProductDetails.defaultProps = {
  rating: 0,
  isWishlisted: false
}

ProductDetails.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  rating: PropTypes.number,
  isWishlisted: PropTypes.bool
}

export default ProductDetails
