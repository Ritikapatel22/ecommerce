import { createContext, useContext, useState } from "react";

const CartContext = createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [amount, setAmount] = useState();

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        setAmount,
        amount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const CartState = () => {
  return useContext(CartContext);
};

export default CartProvider;
