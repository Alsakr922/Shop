import { Link } from "react-router-dom";
import { NAV_LINKS } from "../constants/index";
import Logo from "../logo.png";
import male from "../assets/people/2.png";
import female from "../assets/people/1.png";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { Button } from "@material-tailwind/react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const authUser = localStorage.getItem("authUser");
  const [OpenUser, setOpenUser] = useState(false);
  const handlerUser = () => setOpenUser(!OpenUser);
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const wishesTotalAmount = useSelector((state) => state.wish.totalAmount);
  return (
    <div className="w-full bg-second-600 text-center">
      <div className="flexBetween container sm:relative md:relative m-auto py-2 px-5">
        <Link to={"/"}>
          <img className="h-[60px]" src={Logo} />
        </Link>
        <ul className="flexBetween mx-auto text-center">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              to={link.href}
              key={link.title}
              className="lg:regular-24 regular-16 py-2 lg:px-5 px-2 text-black flexCenter cursor-pointer transition-all hover:text-second-900"
            >
              {link.label}
            </Link>
          ))}
          {authUser ? (
            <li className="px-5 relative cursor-pointer">
              {user.gender == "female" ? (
                <img src={female} alt="female" width={60} onClick={handlerUser} />
              ) : (
                <img src={male} alt="male" width={60} onClick={handlerUser} />
              ) }
              {OpenUser && (
                <ul
                  id="userSign"
                  className="absolute z-[1000] bg-second-100 top-[68px] right-[-35px] pt-5 px-5 text-black text-[18px] rounded-none bg-back"
                >
                  <li className="py-2 flexBetween text-gray-500">
                    Hello:
                    <span className="text-primary-400">{user.userName}</span>
                  </li>
                  <li className="py-2 flexBetween text-gray-500">
                    Mail:
                    <span className="text-primary-400">{user.email}</span>
                  </li>
                  <li className="py-2 flexBetween text-gray-500">
                    Gender:
                    <span className="text-primary-400">{user.gender}</span>
                  </li>
                  <li className="py-2">
                    <Link className="flexCenter gap-x-5" to={"/wish"}>
                      <FaHeart className="text-red-300" /> :{" "}
                      <span>{wishesTotalAmount}</span>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Link className="flexCenter gap-x-5" to={"/cart"}>
                      <FaShoppingBag className="text-green-300" /> :{" "}
                      <span>{cartTotalAmount}</span>
                    </Link>
                  </li>
                  <li className="py-2">
                    <Button
                      onClick={() => dispatch(logout())}
                      className="btnOutline px-5 text-[12px]"
                    >
                      Log Out
                    </Button>
                  </li>
                </ul>
              )}
            </li>
          ) : (
            <div className="flexCenter">
              <Link to={"/auth"}>
                <Button className="btnOutline lg:px-5 lg:text-[20px] ">
                  Log In
                </Button>
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
