import userImg from "../../assets/user.jpg";
import { useState } from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { Button } from "@material-tailwind/react";

const User = () => {
  const [Login, setLogin] = useState(false);

  return (
    <div className="py-200 m-auto mt-[100px] w-[1000px] ">
      <div className="container relative m-auto user grid lg:grid-cols-2 grid-cols-1 transition-all duration-300 ease-in">
        <div
          className={
            Login
              ? `scale-100 transition-all delay-200  duration-500 ease-out`
              : `scale-0 transition-all duration-500 ease-out`
          }
        >
          <SignUp />
        </div>
        <div
          className={
            Login
              ? `scale-0 transition-all duration-500 ease-out`
              : `scale-100 transition-all delay-200 duration-500 ease-out`
          }
        >
          <LogIn />
        </div>
        <div
          className={`absolute h-[720px] lg:top-0 left-0 ${
            Login
              ? `lg:translate-x-full lg:translate-y-0 translate-y-full transition-all duration-500 cubic`
              : `translate-x-0 transition-all duration-500 cubic`
          } `}
        >
          <img
            src={userImg}
            alt="img"
            width={500}
            className="h-full rounded-none"
          />
          <div className="text absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 capitalize text-center text-white">
            <h1 className="text-[45px] tracking-widest font-bold leading-[1.2] w-[400px] ">
              Create and sell extrodinary products
            </h1>
            <small className="text-[20px] w-[200px] font-semibold tracking-wide">
              adopt the peace of electronics
            </small>
          </div>
          <div className="users w-[95%]  mx-3 my-2 flexBetween bottom-0 absolute bg-opacity-50 bg-white py-2 px-5 rounded-none">
            {Login ? (
              <>
                <h1>You have an account </h1>
                <Button
                  className="bg-primary-400"
                  onClick={() => setLogin(false)}
                >
                  Log In
                </Button>
              </>
            ) : (
              <>
                <h1>Dont have an account</h1>
                <Button
                  className="bg-primary-400"
                  onClick={() => setLogin(true)}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default User;
