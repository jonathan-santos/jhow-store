import React from 'react'
import PropTypes from 'prop-types'

import { Title } from '../..'
import { HeaderMenu } from './headerMenu'

import styles from './header.module.scss'

import MenuIcon from '../../../../public/icons/button-menu.svg'
import CartIcon from '../../../../public/icons/button-cart.svg'

export const Header = ({ title }) => (
  <header className={styles.header}>
    <input
      id="menu-visible"
      type="checkbox"
      className={styles['menu-visible']}
      aria-hidden="true"
      hidden
    />

    <label htmlFor="menu-visible" className={styles.button} aria-hidden="true">
      <img src={MenuIcon} alt="Menu Icon" />
    </label>

    <Title color="light" className={styles.title}>
      {title}
    </Title>

    <a href="/cart" className={styles.button} aria-label="Go to cart">
      <img src={CartIcon} alt="Shopping cart icon" />
    </a>

    <HeaderMenu className={styles['header-menu']} />
  </header>
)

Header.propTypes = {
  title: PropTypes.string.isRequired
}

export default Header
