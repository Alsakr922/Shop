/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-no-undef */
import { CATEGORYS } from "../constants";
import { useDispatch } from "react-redux";
import { filterProducts } from "../Redux/Slices/ProductsSlice";
import { Link } from "react-router-dom";

const Categorys = () => {
  const dispatch = useDispatch();

  return (
    <div className="pb-[50px] category" id="category">
      <div className="container m-auto px-20 py-10">
        <p className="lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 my-5 lg:mx-[500px]">
          Categorys
        </p>
        <div className="py-5   grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-5 m-auto justify-center items-center">
          {CATEGORYS.map((category) => {
            return (
              <Link
                to={"/filtered/" + category.title}
                onClick={() => dispatch(filterProducts(category.title))}
                content={`${category.title}`}
                className={`categoryItem w-40 h-40 border-primary-500 border rounded-[30px] flexCenter bg-transparent ${category.title}`}></Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
