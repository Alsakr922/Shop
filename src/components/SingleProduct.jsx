/* eslint-disable react/jsx-key */
import { Button } from "@material-tailwind/react";
import {
  FaCartPlus,
  FaCheck,
  FaHeart,
  FaStar,
  FaStarHalf,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../Redux/Slices/CartSlice";
import { useState } from "react";
import { addToWish } from "../Redux/Slices/WishSlice";
import Swal from "sweetalert2";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const num = [1, 2, 3, 4, 0, 1, 2, 3, 4, 5, 6, 7, 8];
  const num2 = [1, 2, 3, 4, 0, 1, 2, 3, 4, 5];
  const [Color, setColor] = useState("");
  const products = useSelector((state) => state.Products.singleProduct);
  const { id } = useParams();
  const user = useSelector((state) => state.user.user);
  const { authUser } = user;
  return (
    <div className="py-[200px] p-5">
      <div className="container m-auto bg-slate-100">
        {products
          .filter((product) => product.id === id)
          .map((product, index) => {
            return (
              <div className="" key={index}>
                <div className="grid lg:grid-cols-2 grid-cols-1">
                  <div className="p-3  mx-5">
                    <img className="cursor-pointer" src={product.img} alt="" />
                    <img
                      className="w-[20%] cursor-pointer inline py-5 px-2 mr-5 "
                      src={product.img}
                      alt=""
                    />
                    <img
                      className="w-[20%] cursor-pointer inline py-5 px-2 mr-5 "
                      src={product.img}
                      alt=""
                    />
                    <img
                      className="w-[20%] cursor-pointer inline py-5 px-2 mr-5 "
                      src={product.img}
                      alt=""
                    />
                  </div>
                  <div>
                    <h1 className="regular-64 capitalize">{product.title}</h1>
                    <span className="flex w-fit pr-1 py-1 my-1 border-r border-r-gray-90 text-yellow-50 text-[12px] space-x-1">
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStar />
                      <FaStarHalf />
                    </span>
                    <p className="text-xl">
                      Processor:{" "}
                      <span className="text-gray-700">
                        11 Generation Intel® Core™ i3-1115G4 (up to 4.1 GHz with
                        Intel® Turbo Boost Technology, 6 MB L3 cache, 2 cores, 4
                        threads)
                      </span>
                    </p>
                    <p className="text-xl">
                      Ram: <span className="text-gray-700">4GB</span>
                    </p>
                    <p className="text-xl">
                      Hard Disk: <span className="text-gray-700">1TB</span>
                    </p>
                    <p className="text-xl">
                      Graphics Card:{" "}
                      <span className="text-gray-700">Intel UHD Graphics</span>
                    </p>
                    <div className="flex items-center gap-x-5 mb-2 text-xl font-medium text-gray-900 dark:text-white">
                      {product.colors.map((color, index) => {
                        return (
                          <label
                            className="h-8 w-8 rounded-full relative cursor-pointer"
                            style={{ background: color }}
                            key={index}>
                            <input
                              type="radio"
                              value={color}
                              className="absolute top-0 left-0 cursor-pointer -translate-x-0 hidden"
                              onChange={(e) => setColor(e.target.value)}
                              name="color"
                              color={color}
                            />
                            {Color === color ? (
                              <FaCheck className="text-[34px] text-primary-900" />
                            ) : (
                              ""
                            )}
                          </label>
                        );
                      })}
                    </div>
                    <p className="regular-24 border-y border-solid border-gray-30 py-5 my-5 px-5">
                      <span className="text-red-600 text-[16px] pr-3 line-through">
                        {" "}
                        {product.oldPrice} ${" "}
                      </span>{" "}
                      {product.newPrice}$
                    </p>
                    <div className="flexBetween px-5">
                      <Button
                        className="flex space-x-3 btnOutline text-[30px] hover:text-green-50 rounded-none "
                        onClick={
                          authUser
                            ? () =>
                                dispatch(
                                  addToCart({
                                    id: product.id,
                                    name: product.title,
                                    img: product.img,
                                    newPrice: product.newPrice,
                                    color: Color,
                                    amount: 1,
                                  })
                                )
                            : () => {
                                Swal.fire({
                                  icon: "error",
                                  title: "You Cant Add Before You Sign In!...",
                                });
                              }
                        }>
                        <FaCartPlus />
                        <span className="regular-20">Buy Now!</span>
                      </Button>
                      <Button
                        className="flex space-x-3 btnOutline  text-[30px] hover:text-red-500 rounded-none "
                        onClick={
                          authUser
                            ? () =>
                                dispatch(
                                  addToWish({
                                    id: product.id,
                                    name: product.title,
                                    img: product.img,
                                    colors: product.colors,
                                    amount: 1,
                                  })
                                )
                            : () => {
                                Swal.fire({
                                  icon: "error",
                                  title: "You Cant Add Before You Sign In!...",
                                });
                              }
                        }>
                        <FaHeart />
                        <span className="regular-20">Add To Favorites</span>
                      </Button>
                    </div>
                  </div>
                </div>
                <div className="flexBetween regular-24 px-5 w-full">
                  <h1 className="w-[32%] text-center border-b-4 border-b-primary-900 py-5">
                    More Information{" "}
                  </h1>
                  <h1 className="w-[32%] text-center border-b-4 border-b-gray-30 py-5">
                    Details{" "}
                  </h1>
                  <h1 className="w-[32%] text-center border-b-4 border-b-gray-30 py-5">
                    Reviews{" "}
                  </h1>
                </div>
                <div className="grid grid-cols-2 p-5 text-center justify-center m-auto">
                  <tbody className="space-x-3 leading-10">
                    {num.map(() => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <th className="pr-1 text-primary-400">
                            Processor Generation :{" "}
                          </th>
                          <td className="text-gray-30">11th Generation</td>
                        </tr>
                      );
                    })}
                  </tbody>
                  <tbody className="space-x-3 leading-10">
                    {num2.map(() => {
                      return (
                        // eslint-disable-next-line react/jsx-key
                        <tr>
                          <th className="pr-1 text-primary-400">
                            Processor Generation :{" "}
                          </th>
                          <td className="text-gray-30">11th Generation</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default SingleProduct;
