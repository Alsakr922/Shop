import { Button, Input } from "@material-tailwind/react";

const FooterAdds = () => {
  return (
    <div>
      <section className="subscripe px-20 py-10">
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
          <div className="form flex rounded items-center bg-white">
            <Input
              icon={
                <div className="flexCenter">
                  <Button className="rounded-[0] text-primary-500 right-[270px] top-[-10px] absolute py-[14px] px-[140px] ">
                    Send
                  </Button>
                </div>
              }
              label="Email"
              size="lg"
              type="email"
              name="email"
              className="py-5 focus:border-primary-500 "
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default FooterAdds;
