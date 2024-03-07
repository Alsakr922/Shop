/* eslint-disable react/jsx-key */
import { PRODUCTS_CARD } from '../constans/index'
import ProductCard from './ProductCard.jsx';
const Products = () => {

  return (
  <div className='pb-[100px] bg-gray-100' id='products'>
    <div className='New container m-auto'>
        <p className='lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 '>All Products</p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   gap-5">
        {PRODUCTS_CARD.map((product , index) => (
          <ProductCard type={product.type} key={index} id={product.id} title={product.title} oldPrice={product.oldPrice} colors={product.colors} newPrice={product.newPrice} img={product.img}/>
        ))}
          </div>
    </div>
</div>
  )
}

export default Products