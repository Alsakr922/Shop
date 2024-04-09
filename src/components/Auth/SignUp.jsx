import { Button } from "@material-tailwind/react";
import Logo from "../../../public/vite.png";
import { FaEnvelope, FaShieldAlt, FaUserAlt } from "react-icons/fa";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createAcount } from "../../Redux/Slices/AuthSlice";

const SignUp = () => {
  const dispatch = useDispatch();
  const initialStateSignUp = {
    userName: "",
    password: "",
    email: "",
    gender: "male",
  };
  const [ErrorUserNameColor, setErrorUserNameColor] = useState(false);
  const [ErrorPasswordColor, setErrorPasswordColor] = useState(false);
  const [ErrorMailColor, setErrorMailColor] = useState(false);
  const [Values, setValues] = useState(initialStateSignUp);
  const onChangeUserName = (e) => {
    const { name, value } = e.target;
    if (value.length > 4) {
      setErrorUserNameColor(true);
      setValues({ ...Values, [name]: value });
    } else {
      setErrorUserNameColor(false);
    }
  };
  const onChangePassword = (e) => {
    const { name, value } = e.target;
    if (value.length > 8) {
      setErrorPasswordColor(true);
      setValues({ ...Values, [name]: value });
    } else {
      setErrorPasswordColor(false);
    }
  };
  const onChangeMail = (e) => {
    const { name, value } = e.target;
    if (value.includes("@") && value.includes(".")) {
      setErrorMailColor(true);
      setValues({ ...Values, [name]: value });
    } else {
      setErrorMailColor(false);
    }
  };
  const onChangeGender = (e) => {
    const { name, value } = e.target;
    setValues({ ...Values, [name]: value });
  };

  console.log("ValuesSignUp", Values);
  return (
    <div className="p-10 flexCenter flex-col max-w-[500px] h-[720px] rounded-none">
      <div className="flexCenter pt-5 flex-col ">
        <img src={Logo} alt="" width={150} />
        <h1 className="text-[40px] font-semibold text-primary-400 tracking-wider">
          Create Account
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
          <label>E-mail</label>
          <input
            className={`w-full bg-blue-gray-100 placeholder:text-primary-800 placeholder:text-[18px]  text-[22px] p-3 ps-10 my-2 outline-none relative rounded-none transition-all ease-out duration-300 ${
              ErrorMailColor ? "bg-blue-gray-100" : "bg-red-400"
            }`}
            type="mail"
            name="email"
            placeholder="Type Your Email..."
            style={{ backgroundColor: ErrorMailColor }}
            onChange={onChangeMail}
            id=""
          />
          <FaEnvelope className="absolute top-[54px] left-[10px]" />
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
            style={{ backgroundColor: ErrorPasswordColor }}
            onChange={onChangePassword}
            id=""
          />
          <FaShieldAlt className="absolute top-[54px] left-[10px]" />
        </div>
        <div className="input relative">
          <label>Gender</label>
          <select
            name="gender"
            id=""
            onChange={onChangeGender}
            className="w-full bg-blue-gray-100 placeholder:text-primary-800 placeholder:text-[18px] text-[22px] p-3 ps-10 my-2 outline-none relative rounded-none transition-all ease-out duration-300"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <Button
          className="bg-primary-300 my-5 p-3 text-[20px]"
          onClick={() => dispatch(createAcount(Values))}
        >
          Create Account
        </Button>
      </form>
    </div>
  );
};

export default SignUp;
