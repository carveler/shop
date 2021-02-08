import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import CartItem from './CartItem';
export default function CartList() {
  const { clearCart } = useContext(CartContext);

  const { state } = useContext(CartContext);

  console.log(state);

  const totalPrice = state
    .reduce((acc, cur) => acc + cur.price * cur.qty, 0)
    .toFixed(2);
  return (
    <div className='cart_container'>
      <div className='item_container'>
        {state.length === 0 && <h3>Cart is Empty</h3>}
        {state.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      {state.length > 0 && (
        <section className='cart_summary'>
          <div>
            <div calssName='subtotal_container'>
              <h4>SubTotal</h4>
              <h3> $ {totalPrice}</h3>
            </div>
            <div>
              <h4>Shipping</h4>
              <h3>{totalPrice > 50 ? 'Free' : '$4.99'}</h3>
            </div>
          </div>
          <button>CHECKOUT</button>
          <button onClick={() => clearCart()} className='clear_cart_btn'>
            Clear Cart
          </button>
        </section>
      )}
    </div>
  );
}
