import React from 'react'
import styles from '@/components/header/header.module.css'
import Link from 'next/link'
import { useState, useContext } from 'react'
import { CartContext } from '@/context/CartContext'
import Image from 'next/image'
import cartIcon from '@/images/bag.png'
import Cart from '../cart/cart'

export default function Header(): React.JSX.Element {
  const [openCart, setOpenCart] = useState(false)
  const { cart } = useContext(CartContext)
  const { setCart } = useContext(CartContext)
  const isArray = Array.isArray(cart)

  const handleRemove = (cartId: number | undefined): void => {
    if (isArray)
      setCart(cart.filter(item => item.cartId !== cartId))
  }

  return (
    <nav className={styles.nav}>
        <Link className={styles.a} href='/'>
          <h1 className={styles.h1}>COOL PRODUCTS</h1>
        </Link>
        <div className={styles.cartButton} onClick={() => setOpenCart(prev => !prev)}>
          <Image className={styles.cartIcon} src={cartIcon} alt='cart-icon' width={50} height={50}/>
          {isArray && <div className={styles.numberOfItems}>
            <p>{cart.length}</p>  
          </div>}
        </div>
        {openCart && (
            <Cart onRemove={handleRemove} setOpenCart={setOpenCart} cart={cart} />
          )}
    </nav>
  )
}
