import { ProductInCart } from "@/types/products";
import { createContext, useState } from "react";
import { cart } from "@/types/cart";

export const CartContext = createContext<cart>({
    cart: null,
    setCart: () => {}
});

export const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<null | Array<ProductInCart> | ProductInCart>(null);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};