import Category from './Category';
import { FaCartPlus } from 'react-icons/fa';
import Colors from './Colors';
import Prices from './Prices';

const Sidebar = () => {
  
  return (
    <div className='fixed w-[10%] bg-gray-200 z-40 p-5 left-0 h-full border-r-2 border-r-primary-500'>
      <div>
        <FaCartPlus className='text-[40px] top-0 text-center m-auto mb-5 ' alt="" />
        <Category></Category>
        <Colors></Colors>
        <Prices></Prices>
      </div>
    </div>
  )
}

export default Sidebar