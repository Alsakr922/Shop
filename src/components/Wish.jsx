import { FaXingSquare } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWish } from '../Redux/Slices/WishSlice';



const Wish = () => {
      const dispatch = useDispatch()
  const wish = JSON.parse(sessionStorage.getItem('wish'));
  console.log('wish',wish);
      const wishesTotalAmount = useSelector((state) => state.wish.totalAmount)
      console.log("wishesTotalAmount", wishesTotalAmount)
  return (
    <div className='py-[200px]'>
      <div className='container m-auto'>
        {wish.map((product , index) => {
          return (
          <div key={index}>
            <td className="py-5 font-semibold cursor-pointer"><FaXingSquare onClick={() => dispatch(removeFromWish(product))} /></td>
            <td className="py-5 font-semibold"><img src={product.img} width={50} alt="" /></td>
            <td className="py-5 font-semibold">{product.name}</td>
          </div>
          )
        })}
      </div>
    </div>
  )
}

export default Wish