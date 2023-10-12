import React from 'react';
import { useRouter } from "next/router";
import { Product, ProductInCart } from "@/types/products";
import { getProduct } from "@/api-routes/getProducts";
import { useEffect, useState, useContext } from "react";
import Image from "next/image";
import styles from '@/pages/product/[slug]/index.module.scss'
import { CartContext } from "@/context/CartContext";
import { truncate } from "@/utils/truncate";
let cartId = 0;

export default function ProductPage(): React.JSX.Element {
    const router = useRouter()
    const { slug } = router.query 
    const [product, setProduct] = useState<Product | undefined>(undefined)
    const { cart } = useContext(CartContext)
    const { setCart } = useContext(CartContext)
    
    useEffect(() => {
      const fetchData = async () => {
        if (typeof slug === 'string') {
          const data = await getProduct(slug);
          setProduct(data);
        }
      }
      fetchData();
    }, [slug]);

    const handleAddtoCart = (product: Product): void => {
      cartId += 1
      let shortTitle: string;
      let newObj: ProductInCart;
      const isArray = Array.isArray(cart)

      if (product.title.length >= 20) {
        shortTitle = truncate(product.title, 20)
        newObj = { ...product, cartId: cartId, shortTitle: shortTitle}
      } else {
        newObj = { ...product, cartId: cartId}
      }

      if (isArray) {
        setCart([...cart, newObj])
      } else {
        setCart([newObj])
      }

    }

    if (product) {
      return (
        <>
          <div className={styles.productContainer}>
              <Image className={styles.productImg} alt={product.title} src={product.image} width={500} height={500} />
              <div className={styles.productInfo}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.price}>$ {product.price}</p>
                <button onClick={() => handleAddtoCart(product)} className={styles.button}>Add to Cart</button>
                <p>{product.description}</p>
              </div>
          </div>
        </>
      )
    } else {
      return <div />
    }
}