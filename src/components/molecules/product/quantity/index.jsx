import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import { Title, Text, QuantitySelector } from '../../../'

import styles from '../product.module.scss'

export const ProductQuantity = ({
  image,
  name,
  price,
  quantity,
  changeQuantity
}) => (
  <div className={styles['product-quantity']}>
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
      <div className={styles.details}>
        <Title level="2" className={styles.title}>
          {name}
        </Title>

        <p>
          <Text as="span" bold>
            Total:
          </Text>

          <Text as="span"> $ {price * quantity}</Text>
        </p>
      </div>

      <QuantitySelector quantity={quantity} change={changeQuantity} />
    </div>
  </div>
)

ProductQuantity.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
  changeQuantity: PropTypes.func.isRequired
}

export default ProductQuantity
