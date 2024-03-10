import { Button } from "@material-tailwind/react";

const Articles = () => {
  return (
    <div>
      <section className="articles px-20 py-10">
        <div className="grid py-10 articlesOne grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="box max-w-screen py-52 flex items-start flex-col justify-center p-10 w-full text-black">
            <h4 className="text-3xl text-black">Crazy Deals</h4>
            <h3 className="text-4xl py-3">Buy 1 Get 1 free!</h3>
            <p className="text-lg">
              best classic Accesories is on sale at cara
            </p>
            <Button className="btnOutline text-[16px] mt-5 ">Learn More</Button>
          </div>
          <div className="box py-52 flex items-start flex-col justify-center p-10 w-full text-black">
            <h4 className="text-3xl text-black">Ramadan</h4>
            <h3 className="text-4xl py-3">Upcomming Season</h3>
            <p className="text-lg">Best Choises For Electronics</p>
            <Button className="btnOutline text-[16px] mt-5">Collection</Button>
          </div>
        </div>
        <div className="grid articlesTwo lg:grid-cols-3 grid-cols-1 gap-10">
          <div className="box flexStart flex-col p-10 w-full regular-50 text-white">
            <h3 className="text-3xl py-3">Ramadan SALE</h3>
            <h4 className="text-2xl text-primary-800">
              Ramadan Collection -50% OFF
            </h4>
          </div>
          <div className="box  flexStart flex-col p-10 w-full regular-50 text-white">
            <h3 className="text-3xl py-3">NEW Phones COLLECTION</h3>
            <h4 className="text-2xl text-primary-800">Our Sales 2024</h4>
          </div>
          <div className="box flexStart flex-col p-10 w-full regular-50 text-white">
            <h3 className="text-3xl py-3">Labtops</h3>
            <h4 className="text-2xl text-primary-800">New & Trendy</h4>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Articles;
