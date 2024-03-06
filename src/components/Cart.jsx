/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from 'react-redux';
import { FaEraser } from 'react-icons/fa';
import {  removeFromCart } from '../Redux/Slices/CartSlice';
const Cart = () => {
    const dispatch = useDispatch()

      const cart = JSON.parse(sessionStorage.getItem('cart'));
      const cartTotalPrice = useSelector((state) => state.cart.totalPrice)
      console.log("cartTotalPrice", cartTotalPrice)
      const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
      console.log("cartTotalAmount", cartTotalAmount)
  return (
    
    <section className="pt-[200px] container m-auto cart-section">
    <table className="w-full m-auto py-[200px]">
      <thead className="tablehead p-10 text-primary-500 uppercase text-2xl mb-5 "> 
        <td className="py-5 font-semibold">Remove</td>
        <td className="py-5 font-semibold">Image</td>
        <td className="py-5 font-semibold">Product</td>
        <td className="py-5 font-semibold">Price</td>
        <td className="py-5 font-semibold">Color</td>
        <td className="py-5 font-semibold">َQuantity</td> 
        <td className="py-5 font-semibold">َTotal</td> 
      </thead>
      <tbody className="mt-5  text-lg">
        {cart.map((product ) => {
          return (<tr className='m-auto container'>
        <td className="py-5 font-semibold cursor-pointer"><FaEraser onClick={() => dispatch(removeFromCart(product))} /></td>
        <td className="py-5 font-semibold"><img src={product.img} width={70} alt="" /></td>
            <td className="py-5 font-semibold">{product.name}</td>
            <td className="py-5 font-semibold">{product.newPrice}</td>
            <td className="py-5 font-semibold">{product.color}</td>
            <td className="py-5 font-semibold">َ{product.amount}</td> 
            <td className="py-5 font-semibold">َ{+product.newPrice * +product.amount}</td>
          </tr>
          )
        })}
        </tbody>
      </table>
      <div className='bg-primary-300 rounded-lg ms-auto mt-auto p-5 w-[500px] regular-40'>
      <div className='flexBetween text-gray-20'>Total Items : <span className='text-primary-500 font-semibold'>{cartTotalAmount}</span></div>
      <div className='flexBetween text-gray-20'>Total Prices : <span className='text-primary-500 font-semibold'>{cartTotalPrice}$</span></div>
      </div>
  </section>
  )
}

export default Cart