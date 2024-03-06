import { BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import './App.css'

import Home from './components/Home';
import Login from './components/Login';
import Navbar from './components/Navbar';
import FilteredProducts from './components/FilteredProducts';
import SingleProduct from './components/SingleProduct';
import Products from './components/Products';
import Footer from './components/Footer';
import Wish from './components/Wish';
import Cart from './components/Cart';

function App() {


  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/filtered/:type' element={<FilteredProducts />} />
        <Route path='/filtered/:type/:id' element={<SingleProduct />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/wish' element={<Wish />} />
      </Routes> 
      <Footer />
    </Router> 
    
  )
}

export default App
