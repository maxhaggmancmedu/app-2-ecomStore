import { ProductInCart } from "./products"
export interface cart {
    cart: null | Array<ProductInCart> | ProductInCart
    setCart: React.Dispatch<React.SetStateAction<null | Array<ProductInCart> | ProductInCart>>
}