/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../logo.png";
import { Link } from "react-router-dom";
import { Alert } from "@material-tailwind/react";

const Footer = () => {
  return (
    <>
      <footer className="py-20 p-5">
        <div className="grid lg:grid-cols-3 md:grid-cols-1 container m-auto text-gray-700">
          <ul className="contact ">
            <img src={Logo} className="logo" width={80} alt="" />
            <p className="my-5 font-semibold text-lg">Contact</p>
            <ul className="pb-5">
              <li>
                <span className="font-bold text-gray-600">Address</span> 362
                Welltnatcn Rood. Street 32 Son Francisco
              </li>
              <li>
                <span className="font-bold text-gray-600">PHONE</span> +01 2222
                365 /(+91) 01 2345 6789
              </li>
              <li>
                <span className="font-bold text-gray-600">HOURS</span> 10:00 -
                18:00 ,Mon - Sat
              </li>
            </ul>
            <p className="my-5 font-semibold text-lg">Follow Us</p>
            <ul className="flex ">
              <li>
                <FaFacebook className="mr-3 hover:text-second-500 hover:cursor-pointer hover:scale-125 transition-all transition-400 " />
              </li>
              <li>
                <FaTwitter className=" mr-3 hover:text-second-500 hover:cursor-pointer hover:scale-125 transition-all transition-400 " />
              </li>
              <li>
                <FaInstagram className=" mr-3 hover:text-second-500 hover:cursor-pointer hover:scale-125 transition-all transition-400 " />
              </li>
              <li>
                <FaYoutube className="mr-3 hover:text-second-500 hover:cursor-pointer hover:scale-125 transition-all transition-400 " />
              </li>
            </ul>
          </ul>
          <div className="grid grid-cols-2">
            <ul className="about">
              <p className="my-5 font-semibold text-lg">About</p>
              <li>About Us</li>
              <li>Delivery Information</li>
              <li>Privacy Policy</li>
              <li>terms & Conditions</li>
              <li>Contact Us</li>
            </ul>
            <ul className="account">
              <p className="my-5 font-semibold text-lg">My Account</p>
              <Link to={"/login"}>
                <li>Sign In</li>
              </Link>
              <Link to={"/cart"}>
                <li>View Cart</li>
              </Link>
              <Link to={"/wish"}>
                <li>My Wishlist</li>
              </Link>
              <Link to={"/cart"}>
                <li>Track My Order</li>
              </Link>
              <Link to={"/"}>
                <li>Help</li>
              </Link>
            </ul>
          </div>
          <ul className="app">
            <p className="my-5 font-semibold text-lg">About</p>
            <li>From App Store Or Google Play</li>
            <div className="btns flex flex-row mt-5 gap-5">
              <img
                src="/src/assets/pay/app.jpg"
                className="border-main-1 rounded hover:cursor-pointer"
                alt=""
              />
              <img
                src="/src/assets/pay/play.jpg"
                className="border-main-1 rounded hover:cursor-pointer"
                alt=""
              />
            </div>
            <li>Secured Payment Gateways</li>
            <img src="/src/assets/pay/pay.png" className="ml-5 mt-3" alt="" />
          </ul>
        </div>
      </footer>
      <Alert className="flexCenter bg-primary-900 tracking-[2px] mt-2 m-0">
        {" "}
        2024 | Alsakr <FaCopyright className="inline" /> All Rights Reserved
      </Alert>
    </>
  );
};

export default Footer;
