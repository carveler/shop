import React, { useReducer, createContext } from 'react';

import { CartReducer } from '../reducer/CartReducer';
export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, []);

  const addProduct = (payload) => {
    dispatch({ type: 'ADD_PRODUCT', payload });
  };
  const deleteProduct = (payload) => {
    dispatch({ type: 'DELETE_PRODUCT', payload });
  };

  const increaceQty = (payload) => {
    dispatch({ type: 'INCREACE_QTY', payload });
  };
  const reduceQty = (payload) => {
    dispatch({ type: 'REDUCE_QTY', payload });
  };
  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addProduct,
        deleteProduct,
        increaceQty,
        reduceQty,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
