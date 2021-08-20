import React from 'react'
import PropTypes from 'prop-types'
import Image from 'next/image'

import { Text } from '../../'

import styles from './product.module.scss'

export const Product = ({ name, image }) => (
  <div className={styles.product}>
    <Text>{name}</Text>
    <Image src={image} alt={name} width="100" height="100" />
  </div>
)

Product.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default Product
