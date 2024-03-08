/* eslint-disable react/prop-types */
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { FaCheck, FaEye, FaRegHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addToWish } from '../Redux/Slices/WishSlice';
import { addToCart } from '../Redux/Slices/CartSlice';
import { useState } from 'react';

const ProductCardFlex = ({ img, id, title, newPrice, oldPrice, type, colors }) => {
    const [Color, setColor] = useState("")  
  const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
  const { authUser } = user;
  return (
    <Card id={id} className={`bg-[#FAFAFA] my-5 p-7 w-full hover:scale-[1.02] grid lg:grid-cols-3 md:grid-col-3 grid-col-1 cursor-pointer transition-all`}>
        <div className='cols-span-1'>
          <img
      src={img}
      alt="logo"
      className="h-40 mx-auto pb-3"
        />
      <div className="flexCenter items-center gap-x-3 mb-2 text-xl font-medium text-gray-900 dark:text-white pt-5">
      {colors.map((color , index) => {
        return (
          <label className="h-5 w-5 rounded-full relative cursor-pointer" style={{background:color}}   key={index} >
            <input type="radio" value={color} className="absolute top-0 left-0 cursor-pointer -translate-x-0 hidden" onChange={(e) => setColor(e.target.value)} name='color' color={color} />
            {Color === color ?
              <FaCheck className="text-[20px] text-primary-900" /> : ''}
          </label>
          )
        })}
    </div>
    </div>
  <CardBody className='cols-span-2'>
    <Typography className="font-normal text-[28px] text-second-500">
      {title}
    </Typography>
    <Typography className="font-bold text-[22px] text-second-900">
      {type}
    </Typography>
    <Typography className='text-[20px] pt-2'>
      <span className='text-red-600 line-through block'>{oldPrice}$</span> {newPrice}$
    </Typography>
        <div className='flexBetween pt-2'>
          <Button className="flex btnOutline hover:text-green-50 rounded-none  " onClick={authUser ? () => dispatch(addToCart({
            id:  id ,
            name: title ,
            img:  img  ,
            newPrice: +newPrice ,
            color: Color,
            amount: 1,
          })) :
          () => {
            Swal.fire({
              icon: "error",
              title: "You Cant Add Before You Sign In!...",
            })
          } } >
            Add To Cart
          </Button>

    </div>
        <Link to={`/filtered/${type}/`+ id } className='p-3 text-[20px] absolute bottom-2 right-4 cursor-pointer  bg-transparent transition-all hover:bg-primary-500 hover:text-white border border-primary-500 rounded-full'>
        <FaEye className='cursor-pointer'/>
        </Link>
        <FaRegHeart className='absolute top-5 right-7 cursor-pointer text-red-500 text-3xl ' onClick={authUser ? () => dispatch(addToWish({
          id: id,
          name: title,
          img: img,
          newPrice: +newPrice,
          oldPrice: oldPrice,
          colors: colors
        })) :
          () => {
            Swal.fire({
              icon: "error",
              title: "You Cant Add Before You Sign In!...",
              html: `<a class=" text-primary-500 font-semibold text-[24px] capitalize tracking-[8px]" href="/login">login</a>`,
            })
          } } />
  </CardBody>
</Card>
  )
}

export default ProductCardFlex;