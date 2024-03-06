/* eslint-disable react/jsx-key */

import { useDispatch, useSelector } from 'react-redux';
import { FaXingSquare } from 'react-icons/fa';
import { removeFromCart } from '../Redux/Slices/CartSlice';
const Cart = () => {
    const dispatch = useDispatch()

      const cart = JSON.parse(sessionStorage.getItem('cart'));
      const cartTotalPrice = useSelector((state) => state.cart.totalPrice)
      console.log("cartTotalPrice", cartTotalPrice)
      const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
      console.log("cartTotalAmount", cartTotalAmount)
      const wishesTotalAmount = useSelector((state) => state.wish.totalAmount)
      console.log("wishesTotalAmount", wishesTotalAmount)
  return (
    
    <div>
      <div>
          <section className="my-10 cart-section">
    <table className="w-4/5 m-auto text-center">
      <thead className="tablehead p-10 text-main uppercase text-2xl mb-5 "> 
        <td className="py-5 font-semibold">Remove</td>
        <td className="py-5 font-semibold">Image</td>
        <td className="py-5 font-semibold">Product</td>
        <td className="py-5 font-semibold">Price</td>
        <td className="py-5 font-semibold">Color</td>
        <td className="py-5 font-semibold">َQuantity</td> 
        <td className="py-5 font-semibold">َTotal</td> 
      </thead>
      <tbody className="mt-5 text-lg">
        {cart.map((product ) => {
          return (<tr>
        <td className="py-5 font-semibold cursor-pointer"><FaXingSquare onClick={() => dispatch(removeFromCart(product))} /></td>
        <td className="py-5 font-semibold"><img src={product.img} width={50} alt="" /></td>
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
  </section>
      </div>
    </div>
  )
}

export default Cart