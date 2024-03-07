import { CATEGORYS } from '../../constans'
import { Button } from '@material-tailwind/react'
import { useDispatch } from 'react-redux'
import { filterProducts } from '../../Redux/Slices/ProductsSlice'

const Recommended = () => {
  const dispatch = useDispatch()
  return (
    <div className='w-[40%] m-auto'>
          <div className='py-5  grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5 m-auto justify-center items-center'>
      {CATEGORYS.map((category , index) => {
        return (
          <Button key={index} to={"/filtered/" + category.title} onClick={() => dispatch(filterProducts(category.title))} content={`${category.title}`} className={`btnOutline`}>
            {category.title}
            </Button>
        )
      })}
        </div>
    </div>
  )
}

export default Recommended