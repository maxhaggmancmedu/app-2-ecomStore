import React from 'react'
import { ProductsProps } from '@/types/productsProps'
import Image from 'next/image'
import styles from '@/components/products/products.module.css'
import Link from 'next/link'

export default function Products({ products }: ProductsProps): React.JSX.Element {
  return (
    <div  className={styles.productsContainer}>
        {products?.map(product => {
            return (
                <Link className={styles.product} href={`/product/${product.id}`} key={product.id}>
                    <div className={styles.imgContainer}>
                        <Image className={styles.img} alt={product.title} src={product.image} width={300} height={300} />
                    </div>
                    <div className={styles.titleAndPrice}>
                        <h3>{product.title}</h3>
                        <p>${product.price}</p>
                    </div>
                </Link>
            )
        })}
    </div>
  )
}
