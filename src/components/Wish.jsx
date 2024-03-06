/* eslint-disable react/jsx-key */
import { FaEye, FaHeart } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWish } from '../Redux/Slices/WishSlice';
import { Button, Card, CardBody, Typography } from '@material-tailwind/react';
import { Link } from 'react-router-dom';
import { addToCart } from '../Redux/Slices/CartSlice';
import Swal from 'sweetalert2';



const Wish = () => {
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user.user)
  // console.log("user", user);
  const { authUser } = user;
  const alert = () => {
    Swal.fire({
  title: "You Cant?",
  text: "You Cant Add Before You Sign In!",
  icon: "warning",
  showCancelButton: true,
  confirmButtonColor: "#3085d6",
  cancelButtonColor: "#d33",
  cancelButtonText: "No, I dont",
  confirmButtonText: "Yes, I need!"
}).then((result) => {
  if (result.isConfirmed) {
    Swal.fire({
      title: "Deleted!",
      text: "Your file has been deleted.",
      icon: "success"
    });
  }
});
  }
  const wish = JSON.parse(sessionStorage.getItem('wish'));
  console.log('wish',wish);
      const wishesTotalAmount = useSelector((state) => state.wish.totalAmount)
      console.log("wishesTotalAmount", wishesTotalAmount)
  return (
    <div className='py-[200px]'>
      <div className='container m-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5'>
        {wish.map((product , index) => {
          return (
            <Card id={product.id} key={index} className={`bg-[#FAFAFA] hover:scale-[1.02] cursor-pointer transition-all`}>
  <CardBody className=''>
    <img
      src={product.img}
      alt="logo"
      className="h-40 mx-auto pb-3"
    />
    <Typography className="font-normal text-[28px] text-second-500">
      {product.title}
    </Typography>

        <div className='flexBetween pt-5'>
          <Button className="flex space-x-3 btnOutline hover:text-green-50 rounded-none " onClick={authUser ? () => dispatch(addToCart({
            id:  product.id ,
            name: product.title ,
            img:  product.img  ,
            newPrice: +product.newPrice ,
            colors: product.colors,
            amount: 1,
          })) : alert() }>
            Add To Cart
          </Button>

        <Link to={`/filtered/${product.type}/`+ product.id } className='px-3 py-3 bg-transparent transition-all hover:bg-primary-500 hover:text-white border border-primary-500 rounded-full'>
        <FaEye className='cursor-pointer'/>
        </Link>
    </div>
    <FaHeart className='absolute top-5 right-5 cursor-pointer text-red-500  text-3xl ' onClick={() => dispatch(removeFromWish({
            id:  product.id ,
            name: product.title ,
            img:  product.img  ,
            newPrice: +product.newPrice ,
            colors: product.colors
    }))} />
  </CardBody>
</Card>
          )
        })}
      </div>
    </div>
  )
}

export default Wish