import { Product } from "@/types/products";

export const getProduct = async (id: string): Promise<Product> => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        throw new Error;
    }
}

export const getProducts = async (productLength: number): Promise<Array<Product>> => {
    try {
        const response = await fetch(`https://fakestoreapi.com/products?limit=${productLength + 8}`);
        const data = await response.json();
        return data;
    } catch (error: unknown) {
        throw new Error;
    }
}
