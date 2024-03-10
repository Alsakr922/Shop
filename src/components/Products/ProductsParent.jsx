import { useState } from 'react';
import Products from '../Products'
import Sidebar from './Sidebar';
import ProductCard from '../ProductCard';
import { PRODUCTS_CARD } from '../../constants/PRODUCTS_';

const ProductsParent = () => {
  const filteredProducts = [];

  const [SelectedCategory, setSelectedCategory] = useState(null)
  const [Query, setQuery] = useState("")
  const handleInputChange = e => { setQuery(e.target.value) }
  const filteredItems = PRODUCTS_CARD.filter((product) => {
    product.title.trim().toLocaleLowerCase().indexOf(Query.toLocaleLowerCase()) !== -1
  })
  const handleChange = event => { setSelectedCategory(event.target.value) }
  const handleClick = event => { setSelectedCategory(event.target.value) }
  function fliteredDate(products,selected, Query) {
    let filteredProduct = products
    if (Query) {
      filteredProducts = filteredItems
    }
    if (selected) {
      filteredProducts = filteredProducts.filter((product) => 
        product.id === selected||
        product.title === selected ||
  product.type === selected ||
          product.newPrice === selected
        )
    }
    return filteredProducts.map((product, index) => {
      return (
        <ProductCard img={product.img} key={index} title={product.title} newPrice={product.newPrice} />
      )
    })
   }
  return (
    <div>
      <Sidebar />
      <Products />
    </div>
  )
}

export default ProductsParent
