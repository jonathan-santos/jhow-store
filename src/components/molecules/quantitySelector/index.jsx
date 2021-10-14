import React from 'react'
import PropTypes from 'prop-types'

import { Button, Input } from '../../'

import PlusIcon from '../../../../public/icons/plus.svg'
import MinusIcon from '../../../../public/icons/minus.svg'

import styles from './quantitySelector.module.scss'

export const QuantitySelector = (props) => {
  const { quantity, change } = props

  return (
    <form className={styles['quantity-selector']}>
      <Button onClick={() => change(quantity - 1)} color="in-dark" rounded>
        <img src={MinusIcon} />
      </Button>

      <Input
        onChange={(value) => change(value)}
        className={styles.input}
        value={quantity}
        type="number"
        hideDelete
      />

      <Button onClick={() => change(quantity - 1)} color="in-dark" rounded>
        <img src={PlusIcon} />
      </Button>
    </form>
  )
}

QuantitySelector.propTypes = {
  quantity: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired
}

export default QuantitySelector
