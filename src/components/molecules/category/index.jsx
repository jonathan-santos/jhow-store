import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import { Text } from '../../'

import styles from './category.module.scss'

export const Category = ({ title, image, backgroundColor, link }) => (
  <Link href={link}>
    <a className={styles.category} style={{ backgroundColor }}>
      <Image src={image} alt={title} width="150" height="150" />

      <Text type="span">{title}</Text>
    </a>
  </Link>
)

Category.defaultProps = {
  backgroundColor: 'var(--color-primary)'
}

Category.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string
}

export default Category
