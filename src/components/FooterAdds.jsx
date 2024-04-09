import { Button } from "@material-tailwind/react";
import { FaEnvelope } from "react-icons/fa";

const FooterAdds = () => {
  return (
    <div>
      <section className="bg-primary-700 px-20 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 justify-between items-center text-white">
          <div className="subsDiscription">
            <h1 className="font-semibold text-[50px] leading-[64px] text-white my-7">
              Sign Up For Newsletters
            </h1>
            <p className="text-gray-400">
              Get E-mail updates about our latest shop and{" "}
              <span className="text-main font-semibold ml-1">
                special offers.
              </span>
            </p>
          </div>
          <div className="form flexCenter relative rounded-none items-center">
            <input
              type="email"
              name="email"
              className="py-[14px] ps-10 text-[20px] flex-[80%] border border-primary-500 outline-none text-primary-500  "
            />
            <FaEnvelope className="absolute top-1/2 left-2 text-primary-400 text-xl -translate-y-1/2" />
            <Button className="rounded-none text-[20px] flex-[20%] text-center bg-white border border-primary-500 border-r-0 text-primary-500 py-[14px]">
              Send
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterAdds;
