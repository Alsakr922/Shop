/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from 'react-redux';
import { FaEraser } from 'react-icons/fa';
import {  removeFromCart } from '../Redux/Slices/CartSlice';
const Cart = () => {
    const dispatch = useDispatch()
      const cart = JSON.parse(localStorage.getItem('cart'))|| [];
      const cartTotalPrice = useSelector((state) => state.cart.totalPrice)
      const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  return (
    
    <section className="container m-auto cart-section">
      <div className='cart-bg flexCenter my-[50px] py-[100px] font-light lg:text-[200px] text-[100px]  leading-[64px] text-white'><>Cart</></div>
    <table className="w-full m-auto py-[200px] ">
      <thead className="tablehead p-10 text-primary-500 uppercase lg:text-lg md:text-md sm:text-sm mb-5 "> 
        <td className="lg:p-3 p-[2px] font-semibold">Remove</td>
        <td className="lg:p-3 p-[2px] font-semibold">Image</td>
        <td className="lg:p-3 p-[2px] font-semibold">Product</td>
        <td className="lg:p-3 p-[2px] font-semibold">Color</td>
        <td className="lg:p-3 p-[2px] font-semibold">Price</td>
        <td className="lg:p-3 p-[2px] font-semibold">َQuantity</td> 
        <td className="lg:p-3 p-[2px] font-semibold">َTotal</td> 
      </thead>
      <tbody className="mt-5 lg:text-lg md:text-md sm:text-sm">
        {cart.map((product ) => {
          return (<tr className='m-auto container '>
            <td className="lg:p-3 p-1 font-semibold cursor-pointer"><FaEraser onClick={() => dispatch(removeFromCart(product))} /></td>
            <td className="lg:p-3 p-[2px] font-semibold"><img src={product.img} width={70} alt="" /></td>
            <td className="lg:p-3 p-[2px] font-semibold">{product.name}</td>
            <td className="lg:p-3 p-[2px] font-semibold">{product.color}</td>
            <td className="lg:p-3 p-[2px] font-semibold">{product.newPrice}</td>
            <td className="lg:p-3 p-[2px] font-semiold">َ{product.amount}</td> 
            <td className="lg:p-3 p-[2px] font-semibold">َ{+product.newPrice * +product.amount}</td>
          </tr>
    )
        })}
        </tbody>
      </table>
      <div className='bg-primary-300 rounded-lg ms-auto mt-auto p-5 w-[500px] max-w-[60%] lg:regular-40 regular-30 '>
      <div className='flexBetween text-gray-20'>Total Items : <span className='text-primary-500 font-semibold'>{cartTotalAmount}</span></div>
      <div className='flexBetween text-gray-20'>Total Prices : <span className='text-primary-500 font-semibold'>{cartTotalPrice}$</span></div>
      </div>
  </section>
  )
}

export default Cart