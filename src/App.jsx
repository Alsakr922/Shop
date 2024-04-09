/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import Navbar from "./components/Navbar";
import SingleProduct from "./components/SingleProduct";
import Products from "./components/Products";
import Footer from "./components/Footer";
import Wish from "./components/Wish";
import Cart from "./components/Cart";
import Categorys from "./components/Categorys";
import FilteredProducts from "./components/Filtered/FilteredProducts";
import User from "./components/Auth/User";
import Reviews from "./components/Product/Reviews";
import Information from "./components/Product/Information";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#category" element={<Categorys />} />
        <Route path="/products" element={<Products />} />
        <Route path="/auth" element={<User />} />
        <Route path="/filtered/:type" element={<FilteredProducts />}>
          <Route path="review" element={<Reviews />} />
          <Route path="information" element={<Information />} />
        </Route>
        <Route path="/filtered/:type/:id" element={<SingleProduct />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wish" element={<Wish />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
