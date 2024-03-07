import { useSelector } from 'react-redux'
import ProductCard from './ProductCard';
import { Alert } from '@material-tailwind/react';
import { useParams } from 'react-router-dom';

const FilteredProducts = () => {
    const products = useSelector((state) => state.Products.filteredProducts)
    console.log("Filtered Products", products)
    const { type } = useParams()
    console.log("type", type)
  return (
    <div className='py-[100px]'>
      <div className='container m-auto'>
        <Alert className='bg-gray-500 text-second-600 regular-40 text-center m-auto '>{type}</Alert>
        <div className=" grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5">
          {products.filter(
            (product) => product.type === type).map((product, index) => {
              return (
                <ProductCard type={product.type} key={index} id={product.id} colors={product.colors} title={product.title} img={product.img} oldPrice={product.oldPrice} newPrice={product.newPrice}  />
            )
            })}
        </div>
      </div>
    </div>
  )
}

export default FilteredProducts