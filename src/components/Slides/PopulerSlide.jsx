/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";

export default function PopulerSlide() {
    const items =[   {
    title: 'Apple Watch Ultra 2',
    type: "Watches",
    id: "6",
    img: "/src/assets/products/w (1).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['gray','blue','white','green',]
  },
  {
    title: 'Apple Watch Ultra 2',
    type: "Watches",
    id: "7",
    img: "/src/assets/products/w (2).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['gray','blue','white','green',]
  },
  {
    title: 'Apple Watch Ultra 2',
    type: "Watches",
    id: "8",
    img: "/src/assets/products/w (3).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['gray','blue','white','green',]
  },]
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    
  };
  return (
  <div className='pb-[100px] bg-gray-100' id='products'>
    <div className='New container m-auto'>
        <p className='regular-64 sm:regual-32 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 mx-[500px] '>Populers</p>
    <Slider   {...settings} >
            {items.map((item) => {
        return (
      <ProductCard title={item.title} img={item.img} oldPrice={item.oldPrice} newPrice={item.newPrice} colors={item.colors} id={item.id} />
    )
  })}
      </Slider>
      </div>
      </div>
  );
}