import { Link } from "react-router-dom"
import { NAV_LINKS } from "../constans/index"
import Logo from '../logo.png'
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/Slices/AuthSlice";
import { Button } from "@material-tailwind/react";
import { FaHeart, FaShoppingBag } from "react-icons/fa";
import { useState } from "react";
function Navbar() {
  const dispatch = useDispatch()
  const user = useSelector((state) => state.user.user)
  // console.log("user", user);
  const { authUser } = user;
  // const cart = useSelector((state) => state.cart.cart)
  // console.log("cart", cart);
  // const wish = useSelector((state) => state.wish.wish)
  // console.log("authUser", authUser);
  const [OpenUser, setOpenUser] = useState(false)
  const handlerUser = () => setOpenUser(!OpenUser)
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount)
  // console.log("cartTotalAmount", cartTotalAmount)
  const wishesTotalAmount = useSelector((state) => state.wish.totalAmount)
  // console.log("wishesTotalAmount", wishesTotalAmount)
  return (
    <div className="w-full bg-second-200 text-center">
      <div className="flexBetween container m-auto py-2 px-5">
        <Link to={"/"}>
          <img className="h-[60px]" src={Logo} />
        </Link>
        <ul className="flexBetween mx-auto text-center me-10">
          {authUser ? 
            <li className="px-5 relative cursor-pointer">
              <img src="/src/assets/people/2.png" width={50} onClick={handlerUser} alt="" />
        {OpenUser && 
        <ul id="userSign" className="absolute z-50 bg-second-100 top-[62px] right-[-35px] pt-5 px-5 text-black text-[18px] rounded bg-back">
          <li className="py-2 flexCenter gap-x-5 text-gray-500" >Hello:<span className="text-primary-400">{user.name}</span></li>
          <li className="py-2"><Link className="flexCenter gap-x-5" to={"/wish"}><FaHeart className="text-red-300" /> : <span>{wishesTotalAmount}</span></Link></li>
          <li className="py-2"><Link className="flexCenter gap-x-5" to={"/cart"}><FaShoppingBag className="text-green-300" /> : <span>{cartTotalAmount}</span></Link></li>
          <li className="py-2"><Button onClick={() => dispatch(logout())} className="btnOutline px-5 text-[12px]">Log Out</Button></li>
        </ul>}
      </li>
          : <div className="flexCenter">
              {NAV_LINKS.map((link) => (
                <Link to={link.href} key={link.title} className="regular-16 py-2 px-5 text-primary-600 flexCenter cursor-pointer transition-all hover:text-second-900">
                  {link.label}
              </Link>
              ))}
              <Link to={"/login"}>
              <Button className="btn">
                Log In
              </Button>
              </Link>
            </div>}
        </ul>
      </div>
    </div>
  )
}

export default Navbar