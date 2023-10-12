import React from 'react'
import Image from 'next/image'
import styles from '@/components/cart/cart.module.scss'
import deleteIcon from '@/images/deleteIcon.png'
import Link from 'next/link'
import { CartProps } from '@/types/cartProps'


export default function Cart({setOpenCart, onRemove, cart}: CartProps ): React.JSX.Element {

  const isArray = Array.isArray(cart)

  return (
    <div className={styles.cartComponent}>
      {isArray && cart.length !== 0 ? cart.map((item) => (
            <div className={styles.productInfo} key={item.cartId}>
              <Image className={styles.productImg} src={item.image} alt={item.title} height={50} width={50} />
              <div className={styles.titleAndPrice}>
                <p>$ {item.price}</p>
                <p>{item.shortTitle ? item.shortTitle : item.title}</p>
              </div>
              <Image className={styles.deleteIcon} src={deleteIcon} alt='remove product from cart' width={20} height={20} onClick={() => onRemove(item.cartId)} />
            </div>
          ))
        : <div className={styles.noItems}>NO ITEMS IN CART</div>}
        {isArray && cart.length !== 0 && <Link href='/checkout' onClick={() => setOpenCart(prev => !prev)} className={styles.checkoutButton}>Go To checkout</Link>}
    </div>
  )
}
