import { Button } from "@material-tailwind/react";

const Adds = () => {
  return (
    <div>
      <section className="add my-5 flex flex-col items-center justify-center text-white  py-20 text-center">
        <h4 className="font-semibold text-[28px] text-[#222]">Ramadan Sales</h4>
        <h1 className="font-semibold text-[50px] leading-[64px] text-[#222] my-7">
          Up to <span className="font-medium">70% Off</span> — All Electronics &
          Accessories
        </h1>
        <Button className="px-10 py-4 bg-transparent rounded-none btnOutline transition-all transition-200">
          Explore More
        </Button>
      </section>
    </div>
  );
};

export default Adds;
