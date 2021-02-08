import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';

export default function Product({ product }) {
  const { addProduct } = useContext(CartContext);
  console.log(product);
  return (
    <div className='card'>
      <div className='product'>
        <h3>{product.name}</h3>
        <img src={product.imgUrl} alt='product'></img>
        <h4>Price: $ {product.price}</h4>
        <Link to={{ pathname: '/productDetail', state: { product: product } }}>
          details
        </Link>
      </div>
      <button onClick={() => addProduct(product)}>Add to Cart</button>
    </div>
  );
}
