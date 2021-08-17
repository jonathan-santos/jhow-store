import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import Image from 'next/image'

import styles from './category.module.scss'

export const Category = ({ title, image, backgroundColor, link }) => (
  <Link href={link} className={styles.category} style={{ backgroundColor }}>
    <>
      <Image src={image} alt={title} layout="fill" />

      <span>{title}</span>
    </>
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
