import React, { useState, useReducer } from 'react';

import ShopContext from './shop-context';

const GlobalState = props => {

  const products = [
    { id: 'p1', title: 'Gaming Mouse', price: 29.99 },
    { id: 'p2', title: 'Harry Potter 3', price: 9.99 },
    { id: 'p3', title: 'Used plastic bottle', price: 0.99 },
    { id: 'p4', title: 'Half-dried plant', price: 2.99 }
  ];

  const [cart, setCart] = useState([]);

  return (
    <ShopContext.Provider
      value={{
        products: products,
        cart: cart,
        addProductToCart: addProductToCart,
        removeProductFromCart: removeProductFromCart
      }}
    >
      {props.children}
    </ShopContext.Provider>
  );
};

export default GlobalState;
