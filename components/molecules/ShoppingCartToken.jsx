import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import styles from '../../styles/ShoppingCartToken.module.css'

const ShoppingCartToken = () => {
  return (
    <div className={styles.container}>
      <FontAwesomeIcon icon={faCartShopping} className={styles.shoppingIcon} />
      <p>0</p>
    </div>
  )
}

export default ShoppingCartToken