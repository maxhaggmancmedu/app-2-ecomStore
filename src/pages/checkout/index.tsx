import React from 'react'
import styles from '@/pages/checkout/index.module.css'
import { useRouter } from 'next/router'
import Button from '@/components/button/Button'

export default function CheckoutPage() {
  const router = useRouter()
  const handleClick = (): void => {
      router.back()
  }
  return (
    <div className={styles.container}>
        <h3 className={styles.h3}>You can not Checkout. This store is not real!</h3>
        <Button className='button' value='GO BACK' onClick={handleClick} />
    </div>
  )
}
