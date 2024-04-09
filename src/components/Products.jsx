/* eslint-disable react/jsx-key */
import { useState } from "react";
import { PRODUCTS_CARD } from "../constants/__PRODUCTS.jsx";
import ProductCard from "./ProductCard.jsx";
import ProductCardFlex from "./ProductCardFlex.jsx";
import { FaBars, FaBorderAll } from "react-icons/fa";
import { CATEGORYS, COLORS } from "../constants/index.js";
import { Button } from "@material-tailwind/react";
const Products = () => {
  const [Display, setDisplay] = useState("grid");
  const displayFlex = () => {
    setDisplay("flex");
  };
  const displayGrid = () => {
    setDisplay("grid");
  };
  const [MinPrice, setMinPrice] = useState(0);
  const handleMinPrice = (e) => {
    setMinPrice(e.target.value);
  };
  const [MaxPrice, setMaxPrice] = useState(0);
  const handleMaxPrice = (e) => {
    setMaxPrice(e.target.value);
  };

  console.log("MinPrice", MinPrice);
  console.log("MaxPrice", MaxPrice);
  const [Filter, setFilter] = useState(false);
  const [Filtered, setFiltered] = useState(false);
  const [ColorFilter, setColorFilter] = useState("");
  console.log("Color", ColorFilter);
  const handleColor = (e) => {
    setColorFilter(e.target.value);
    setFiltered(true);
  };

  const [CategoryFilter, setCategoryFilter] = useState("");
  console.log("Category", CategoryFilter);
  const handleCategory = (e) => {
    setCategoryFilter(e.target.value);
    setFiltered(true);
  };
  console.log(Filter);
  const CARD_FILTERED =
    PRODUCTS_CARD.filter(
      (product) => CategoryFilter !== "" && product.type === CategoryFilter
    )
      .filter(
        (product) => ColorFilter !== "" && product.colors.includes(ColorFilter)
      )
      .filter((product) => product.newPrice >= MinPrice)
      .filter((product) => product.newPrice <= MaxPrice) || [];
  console.log("CARD", CARD_FILTERED);
  return (
    <div className="pb-[100px] bg-gray-100" id="products">
      <div
        className={`transition-all ease-out fixed z-[1000] duration-300 ${
          Filter ? `translate-x-0` : `-translate-x-full`
        }`}
      >
        <div className="w-fit h-lvh bg-primary-200 divide-y divide-primary-800 z-[1000] flex flex-col gap-y-1 p-2">
          <div className=" py-1">
            <h1 className="regular-32 pb-2 text-second-500 py-2">Category</h1>
            <div className="grid grid-cols-2 gap-3">
              {CATEGORYS.map((category, index) => {
                return (
                  <Button
                    key={index}
                    value={category.title}
                    className="w-28"
                    onClick={handleCategory}
                  >
                    {category.title}
                  </Button>
                );
              })}
            </div>
          </div>
          <div className="py-3">
            <h1 className="regular-32 pb-2 text-second-500 py-2">Price</h1>

            <p>Min Price , {MinPrice}</p>
            <input
              type="range"
              min={0}
              max={30000}
              step={500}
              className="w-[80%] m-auto accent-primary-400"
              onChange={handleMinPrice}
              value={MinPrice}
            />
            <p>Max Price , {MaxPrice}</p>
            <input
              type="range"
              min={0}
              max={30000}
              step={500}
              className="w-[80%] m-auto accent-primary-400"
              onChange={handleMaxPrice}
              value={MaxPrice}
            />
          </div>
          <div className=" py-1">
            <h1 className="regular-32 pb-2 text-second-500 py-2">Colors</h1>
            <div className="grid grid-cols-2 gap-3">
              {COLORS.map((color, index) => {
                return (
                  <Button
                    key={index}
                    value={color}
                    className="w-28"
                    color={color}
                    onClick={handleColor}
                  >
                    {color}
                  </Button>
                );
              })}
            </div>
          </div>
          <Button
            size="lg"
            className="bg-primary-600"
            onClick={() => setFiltered(false)}
          >
            Clear All Filters
          </Button>
        </div>
      </div>
      <div className="New container m-auto">
        <div className="flexEnd text-[40px] m-auto pt-7 gap-x-5">
          <FaBars
            className="hover:text-primary-500 text-gray-50 transition-all hover:scale-110 cursor-pointer"
            onClick={displayFlex}
          />
          <FaBorderAll
            className="hover:text-primary-500 text-gray-50 transition-all hover:scale-110 cursor-pointer"
            onClick={displayGrid}
          />
          <Button className="" onClick={() => setFilter(!Filter)}>
            Filter
          </Button>
        </div>
        <p className="lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 ">
          All Products
        </p>
        {Display === "grid" ? (
          <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
            {Filtered
              ? CARD_FILTERED.map((product, index) => (
                  <ProductCard
                    type={product.type}
                    key={index}
                    id={product.id}
                    title={product.title}
                    oldPrice={product.oldPrice}
                    colors={product.colors}
                    newPrice={product.newPrice}
                    img={product.img}
                  />
                ))
              : PRODUCTS_CARD.map((product, index) => (
                  <ProductCard
                    type={product.type}
                    key={index}
                    id={product.id}
                    title={product.title}
                    oldPrice={product.oldPrice}
                    colors={product.colors}
                    newPrice={product.newPrice}
                    img={product.img}
                  />
                ))}
          </div>
        ) : (
          <div className="m-10">
            {Filtered
              ? CARD_FILTERED.map((product, index) => (
                  <ProductCardFlex
                    type={CategoryFilter === "" ? product.type : CategoryFilter}
                    key={index}
                    id={product.id}
                    title={product.title}
                    oldPrice={product.oldPrice}
                    colors={product.colors}
                    newPrice={product.newPrice}
                    img={product.img}
                  />
                ))
              : PRODUCTS_CARD.map((product, index) => (
                  <ProductCardFlex
                    type={CategoryFilter === "" ? product.type : CategoryFilter}
                    key={index}
                    id={product.id}
                    title={product.title}
                    oldPrice={product.oldPrice}
                    colors={product.colors}
                    newPrice={product.newPrice}
                    img={product.img}
                  />
                ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
