import React, { useContext } from 'react';
import Product from './Product';
import { ProductsContext } from '../contexts/ProductsContext';
export default function ProductsList() {
  const { products } = useContext(ProductsContext);

  return (
    <div className='products_container'>
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}
