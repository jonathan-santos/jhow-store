import React from 'react'
import classnames from 'classnames'
import PropTypes from 'prop-types'

import { Title, Text, Button } from '../../..'

import styles from './headerMenu.module.scss'

import AccountIcon from '../../../../../public/icons/account.svg'
import AccountActionIcon from '../../../../../public/icons/account-action.svg'
import UserIcon from '../../../../../public/icons/user.svg'
import WishlistIcon from '../../../../../public/icons/wishlist.svg'
import HistoryIcon from '../../../../../public/icons/history.svg'
import SettingsIcon from '../../../../../public/icons/settings.svg'
import CloseIcon from '../../../../../public/icons/close.svg'

export const HeaderMenu = ({ className }) => (
  <div className={classnames(styles['header-menu'], className)}>
    <div className={styles.section}>
      <Title color="light" level="2" aria-hidden="true">
        Jhow Store
      </Title>
    </div>

    <div className={styles.section}>
      <img src={AccountIcon} alt="User icon" className={styles['user-icon']} />

      <Button secondary color="in-dark">
        <img src={AccountActionIcon} alt="Login icon" />
        <Text color="light">Login / Register</Text>
      </Button>
    </div>

    <div className={styles.section}>
      <div className={styles['link-group']}>
        <Button secondary color="in-dark" className={styles.link}>
          <img src={UserIcon} alt="Account icon" />
          <Text color="light">Account</Text>
        </Button>

        <Button secondary color="in-dark" className={styles.link}>
          <img src={WishlistIcon} alt="Wishlist icon" />
          <Text color="light">Wishlist</Text>
        </Button>
      </div>

      <div className={styles['link-group']}>
        <Button secondary color="in-dark" className={styles.link}>
          <img src={HistoryIcon} alt="History icon" />
          <Text color="light">History</Text>
        </Button>

        <Button secondary color="in-dark" className={styles.link}>
          <img src={SettingsIcon} alt="Settings icon" />
          <Text color="light">Settings</Text>
        </Button>
      </div>
    </div>

    <div className={styles.section}>
      <label
        htmlFor="menu-visible"
        className={styles['close-button']}
        aria-hidden="true">
        <img src={CloseIcon} alt="Menu Icon" />
      </label>
    </div>
  </div>
)

HeaderMenu.defaultProps = {
  className: ''
}

HeaderMenu.propTypes = {
  className: PropTypes.string
}

export default HeaderMenu
