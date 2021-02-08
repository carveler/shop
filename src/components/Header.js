import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { NavLink } from 'react-router-dom';
import { AiOutlineShoppingCart } from 'react-icons/ai';
export default function Nav() {
  const { state } = useContext(CartContext);

  console.log(state);
  const totalQty = state.reduce((acc, cur) => cur.qty + acc, 0);
  return (
    <header>
      <h3>Logo</h3>
      <nav>
        <NavLink to='/' exact className='nav_name'>
          Home
        </NavLink>
        <NavLink to='/products' className='nav_name'>
          Products
        </NavLink>
        <NavLink to='/cart' className='nav_name'>
          <AiOutlineShoppingCart size={30} />
        </NavLink>
        <div>({totalQty})</div>
        <NavLink to='/signIn' className='nav_name'>
          Sign in
        </NavLink>
      </nav>
    </header>
  );
}
