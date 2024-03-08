/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { PRODUCTS_CARD } from '../constans/PRODUCTS_.jsx';
import ProductCard from './ProductCard.jsx';
import ProductCardFlex from './ProductCardFlex.jsx';
import { FaBars, FaBorderAll } from 'react-icons/fa';
const Products = () => {
  const [Display, setDisplay] = useState('grid')
  const displayFlex = () => {
    setDisplay('flex')
  }
  const displayGrid = () => {
    setDisplay('grid')
  }
  return (
    <div className='pb-[100px] bg-gray-100' id='products'>
    <div className='New container m-auto'>
      <div className='flexStart text-[40px] m-auto pt-7 gap-x-10'>
      <FaBars className='hover:text-primary-500 text-gray-50 transition-all hover:scale-110 cursor-pointer' onClick={displayFlex} />
      <FaBorderAll className='hover:text-primary-500 text-gray-50 transition-all hover:scale-110 cursor-pointer' onClick={displayGrid} />
      </div>
        <p className='lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 '>All Products</p>
        {Display === 'grid' ? 
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1   gap-5">
        {PRODUCTS_CARD.map((product , index) => (
          <ProductCard type={product.type} key={index} id={product.id} title={product.title} oldPrice={product.oldPrice} colors={product.colors} newPrice={product.newPrice} img={product.img}/>
          ))}
          </div>
          : 
        <div className="m-5">
        {PRODUCTS_CARD.map((product , index) => (
          <ProductCardFlex  type={product.type} key={index} id={product.id} title={product.title} oldPrice={product.oldPrice} colors={product.colors} newPrice={product.newPrice} img={product.img}/>
          ))}
          </div>
        }
    </div>
</div>
  )
}

export default Products