import { Button } from "@material-tailwind/react"
import { FaCartPlus, FaHeart, FaStar, FaStarHalf } from "react-icons/fa"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import { addToCart } from "../Redux/Slices/CartSlice"
import { useState } from "react"
import { addToWish } from "../Redux/Slices/WishSlice"
import Swal from "sweetalert2"

const SingleProduct = () => {

  const cart = useSelector((state) => state.cart.cart)
  console.log("cart", cart)
  const totalPrice = useSelector((state) => state.cart.totalPrice)
  console.log("totalPrice", totalPrice)
  const totalAmount = useSelector((state) => state.cart.totalAmount)
  console.log("totalAmount", totalAmount)

  const num = [1, 2, 3, 4 ,0 , 1, 2 , 3, 4, 5, 6, 7, 8]
  const num2 = [1, 2, 3, 4, 0, 1, 2, 3, 4, 5]
  const [color , setcolor] = useState("")
    const dispatch = useDispatch()


    const products = useSelector((state) => state.Products.singleProduct)
    console.log("Single Products", products)
    const { id } = useParams()
  console.log("id", id)
      const user = useSelector((state) => state.user.user)
  // console.log("user", user);
  const { authUser } = user;
  return (
    <div className="py-[200px]">
      <div className="container m-auto bg-slate-100">
          {products.filter((product) => product.id === id).map((product, index) => {
            return (
        // eslint-disable-next-line react/jsx-key
        <div className="">
        <div className="grid grid-cols-2 " key={index}>
          <div className="p-3  mx-5">
            <img className="cursor-pointer" src={product.img} alt="" />
            <img className="w-[20%] cursor-pointer inline py-5 px-2 mr-5 " src={product.img} alt="" />
            <img className="w-[20%] cursor-pointer inline py-5 px-2 mr-5 " src={product.img} alt="" />
            <img className="w-[20%] cursor-pointer inline py-5 px-2 mr-5 " src={product.img} alt="" />
          </div>
          <div>
                  <h1 className="regular-64 capitalize">{product.title}</h1>
                  <span className="flex w-fit pr-1 py-1 my-1 border-r border-r-gray-90 text-yellow-50 text-[12px] space-x-1"><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalf /></span>
                  <p>Processor: <span className="text-gray-700">11 Generation Intel® Core™ i3-1115G4 (up to 4.1 GHz with Intel® Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4 threads)</span></p>
                  <p>Ram: <span className="text-gray-700">4GB</span></p>
                  <p>Hard Disk: <span className="text-gray-700">1TB</span></p>
                  <p>Graphics Card: <span className="text-gray-700">Intel UHD Graphics</span></p>
                      <select value={color} onChange={(e) => setcolor(e.target.value)} className={`flexCenter w-full border-primary-300 border p-1 my-2 cursor-pointer`}> Colors:
                        {product.colors.map((c) => {
                      return (
                          <option name=" color" key={Math.random} value={c} style={{ color : c }} >{c}</option>
                      )
                    })}
                        </select>
                  <p className="regular-24 border-y border-solid border-gray-30 py-5 my-5 px-5"><span className='text-red-600 text-[16px] pr-3 line-through'>  {product.oldPrice} $ </span>   {product.newPrice}$</p>
                  <div className="flexBetween px-5">
                  <Button className="flex space-x-3 btnOutline text-[30px] hover:text-green-50 rounded-none " onClick={authUser ? () => dispatch(addToCart({
                    id:  product.id ,
                    name: product.title,
                    img:product.img,
                    newPrice: product.newPrice ,
                    color: color,
                    amount: 1,
                  })) : 
          () => {
            Swal.fire({
              icon: "error",
              title: "You Cant Add Before You Sign In!...",
              html: `<a class=" text-primary-500 font-semibold text-[24px] capitalize tracking-[8px]" href="/login">login</a>`,
            })
          }
                  }>
                    <FaCartPlus />
                      <span className="regular-20">Buy Now!</span>
                  </Button>
                    <Button className="flex space-x-3 btnOutline  text-[30px] hover:text-red-500 rounded-none "  onClick={authUser ? () => dispatch(addToWish({
                    id:  product.id ,
                    name: product.title,
                    img:product.img,
                    color: color,
                    amount: 1,
                    }))
                      :
          () => {
            Swal.fire({
              icon: "error",
              title: "You Cant Add Before You Sign In!...",
              html: `<a class=" text-primary-500 font-semibold text-[24px] capitalize tracking-[8px]" href="/login">login</a>`,
            })
          }}>
                    <FaHeart  />
                      <span className="regular-20">Add To Favorites</span>
                  </Button>
                  </div>
                </div>
                </div>
                <div className="flexBetween regular-24 px-5 w-full">
                  <h1 className="w-[32%] text-center border-b-4 border-b-primary-900 py-5">More Information </h1>
                  <h1 className="w-[32%] text-center border-b-4 border-b-gray-30 py-5">Details </h1>
                  <h1 className="w-[32%] text-center border-b-4 border-b-gray-30 py-5">Reviews </h1>
                </div>
                <div className="grid grid-cols-2 p-5 text-center justify-center m-auto">
                  <tbody className="space-x-3 leading-10">
                    {num.map(() => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <th className="pr-1 text-primary-400">Processor Generation : </th>
                          <td className="text-gray-30">11th Generation</td>
                        </tr>
                      )
                    } )}
                  </tbody>
                  <tbody className="space-x-3 leading-10">
                    {num2.map(() => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <th className="pr-1 text-primary-400">Processor Generation : </th>
                          <td className="text-gray-30">11th Generation</td>
                        </tr>
                      )
                    } )}
                  </tbody>
                </div>
                </div>
            )
          })}
      </div>
    </div>
  )
}

export default SingleProduct