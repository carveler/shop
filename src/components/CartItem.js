import React, { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import { AiFillPlusCircle, AiFillMinusCircle } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
export default function CartItem({ item }) {
  const { addProduct, deleteProduct, reduceQty } = useContext(CartContext);
  console.log(item);
  console.log(item.id);

  return (
    <div className='cart_card'>
      <section className='item_detail'>
        <img src={item.imgUrl} alt='product'></img>
        <div className='item_name'>{item.name} </div>
        <div className='item_price'> Price: ${item.price}</div>
      </section>
      <section className='cart_icon'>
        <div onClick={() => reduceQty(item)} className='icon decrece'>
          <AiFillMinusCircle size={30} />
        </div>
        <div> Qty：{item.qty} </div>
        <div onClick={() => addProduct(item)} className='icon increce'>
          <AiFillPlusCircle size={30} />
        </div>
        <div onClick={() => deleteProduct(item)}>
          <BsFillTrashFill size={30} />
        </div>
      </section>
    </div>
  );
}
