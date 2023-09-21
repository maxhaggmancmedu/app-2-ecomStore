export interface Product {
    category: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: {
        rate: number,
        count: number
    },
    title: string,
}

export interface ProductInCart extends Product {
    cartId: number,
    shortTitle?: string
}