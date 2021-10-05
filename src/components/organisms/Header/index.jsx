import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../../'

import styles from './header.module.scss'

import MenuIcon from '../../../../public/icons/button-menu.svg'
import CartIcon from '../../../../public/icons/button-cart.svg'

export const Header = ({ title }) => (
  <header className={styles.header}>
    <img src={MenuIcon} alt="Menu Icon" className={styles.button} />

    <Title color="light" className={styles.title}>
      {title}
    </Title>

    <img src={CartIcon} alt="Shopping cart icon" className={styles.button} />
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
