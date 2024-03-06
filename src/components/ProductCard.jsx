/* eslint-disable react/prop-types */
import { Card, CardBody } from '@material-tailwind/react';
import { FaEye, FaRegHeart } from 'react-icons/fa';
import { Typography } from '@material-tailwind/react';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/Slices/CartSlice';
import {  useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../Redux/Slices/WishSlice';
import Swal from 'sweetalert2';
const ProductCard = ({ img, id, title, newPrice, oldPrice, type, colors }) => {
  const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
  // console.log("user", user);
  const { authUser } = user;
  return (
    <Card id={id} className={`bg-[#FAFAFA] hover:scale-[1.02] cursor-pointer transition-all`}>
  <CardBody className=''>
    <img
      src={img}
      alt="logo"
      className="h-40 mx-auto pb-3"
    />
    <Typography className="font-normal text-[28px] text-second-500">
      {title}
    </Typography>
    <Typography className='text-[20px]'>
      <span className='text-red-600 line-through'>{oldPrice}$</span> , {newPrice}$
    </Typography>
        <div className='flexBetween pt-5'>
          <Button className="flex space-x-3 btnOutline hover:text-green-50 rounded-none " onClick={authUser ? () => dispatch(addToCart({
            id:  id ,
            name: title ,
            img:  img  ,
            newPrice: +newPrice ,
            colors: colors,
            amount: 1,
          })) :
          () => {
            Swal.fire({
              icon: "error",
              title: "You Cant Add Before You Sign In!...",
              html: `<a class=" text-primary-500 font-semibold text-[24px] capitalize tracking-[8px]" href="/login">login</a>`,
            })
          } } >
            Add To Cart
          </Button>

        <Link to={`/filtered/${type}/`+ id } className='px-3 py-3 bg-transparent transition-all hover:bg-primary-500 hover:text-white border border-primary-500 rounded-full'>
        <FaEye className='cursor-pointer'/>
        </Link>
    </div>
        <FaRegHeart className='absolute top-5 right-5 cursor-pointer text-red-500  text-3xl ' onClick={authUser ? () => dispatch(addToWish({
          id: id,
          name: title,
          img: img,
          newPrice: +newPrice,
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

export default ProductCard