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
import Categorys from './components/Categorys';
import { useSelector } from 'react-redux';

function App() {

    const user = useSelector((state) => state.user.user)
  // console.log("user", user);
  const { authUser } = user;
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/#category' element={<Categorys />} />
        <Route path='/products' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/filtered/:type' element={<FilteredProducts />} />
        <Route path='/filtered/:type/:id' element={<SingleProduct />} />
        <Route path='/cart' element={authUser ? <Cart /> :<Login /> } />
        <Route path='/wish' element={authUser ? <Wish /> : <Login />} />
      </Routes> 
      <Footer />
    </Router> 
    
  )
}

export default App
