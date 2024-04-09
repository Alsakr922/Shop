import { Button } from "@material-tailwind/react";
import Logo from "../../../public/vite.png";
import { FaShieldAlt, FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../../Redux/Slices/AuthSlice";

const LogIn = () => {
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("user"));
  const initialStateLogin = {
    userName: "",
    password: "",
  };
  console.log("initialStateLogin", initialStateLogin);
  const [ErrorUserNameColor, setErrorUserNameColor] = useState("");
  const [ErrorPasswordColor, setErrorPasswordColor] = useState("");
  const [ValuesLogin, setValuesLogin] = useState(initialStateLogin);
  const onChangeUserName = (e) => {
    const { name, value } = e.target;
    if(value.length > 4){
      setErrorUserNameColor(true)
      setValuesLogin({ ...ValuesLogin, [name]: value });
    }else{
      setErrorUserNameColor(false);
    }
  };
  const onChangePassword = (e) => {
    const { name, value } = e.target;
    if (value.length > 8) {
      setErrorPasswordColor(true);
      setValuesLogin({ ...ValuesLogin, [name]: value });
    } else {
      setErrorPasswordColor(false);
    }
  };
  const [forgetPasswordValue, setforgetPasswordValue] = useState(false);
  const [forgetPasswordText, setforgetPasswordText] = useState("");
  const handleForgetPassword = () => {
    if (user) {
      setforgetPasswordValue(true);
      setforgetPasswordText(user.password);
    } else {
      setforgetPasswordValue(true);
      setforgetPasswordText("Not Username");
    }
  };
  return (
    <div className="p-10 flexCenter flex-col max-w-[500px] h-[720px] rounded-none">
      <div className="flexCenter pt-5 flex-col ">
        <img src={Logo} alt="" width={150} />
        <h1 className="text-[40px] font-semibold text-primary-400 tracking-wider">
          Welcome Back
        </h1>
      </div>
      <form className="flex flex-col w-full p-10">
        <div className="input relative">
          <label>User Name</label>
          <input
            className={`w-full bg-blue-gray-100 placeholder:text-primary-800 placeholder:text-[18px]  text-[22px] p-3 ps-10 my-2 outline-none relative rounded-none transition-all ease-out duration-300 ${
              ErrorUserNameColor ? "bg-blue-gray-100" : "bg-red-400"
            }`}
            type="text"
            name="userName"
            placeholder="User Name"
            onChange={onChangeUserName}
            id=""
          />
          <FaUserAlt className="absolute top-[54px] left-[10px]" />
        </div>
        <div className="input relative">
          <label>Password</label>
          <input
            className={`w-full bg-blue-gray-100 placeholder:text-primary-800 placeholder:text-[18px]  text-[22px] p-3 ps-10 my-2 outline-none relative rounded-none transition-all ease-out duration-300 ${
              ErrorPasswordColor ? "bg-blue-gray-100" : "bg-red-400"
            }`}
            type="password"
            name="password"
            placeholder="Password"
            onChange={onChangePassword}
            id=""
          />
          <FaShieldAlt className="absolute top-[54px] left-[10px]" />
        </div>
        <Button
          className="bg-primary-300 my-5 p-3 text-[20px]"
          onClick={() => dispatch(login(ValuesLogin))}
        >
          {" "}
          Log In
        </Button>
        <h1 className="text-start self-start text-lg ps-2 ">
          Forget Password ?
          <a
            className=" text-primary-500 text-xl ps-1 hover:text-primary-600 transition-all ease-in duration-300 cursor-pointer"
            onClick={handleForgetPassword}
          >
            Click Here !
          </a>
          <span className="font-semibold text-2xl ms-3 text-second-950 block">
            {forgetPasswordValue && forgetPasswordText}
          </span>
        </h1>
      </form>
    </div>
  );
};

export default LogIn;
