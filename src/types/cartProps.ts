import { ProductInCart } from "./products"

export interface CartProps {
    setOpenCart: React.Dispatch<React.SetStateAction<boolean>>,
    onRemove: (cartId: number | undefined) => void,
    cart: null | Array<ProductInCart> | ProductInCart
}