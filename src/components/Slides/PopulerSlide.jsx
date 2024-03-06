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
    img: "/src/assets/products/w(1).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['gray','blue','white','green',]
  },
  {
    title: 'Apple Watch Ultra 2',
    type: "Watches",
    id: "7",
    img: "/src/assets/products/w(2).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['gray','blue','white','green',]
  },
  {
    title: 'Apple Watch Ultra 2',
    type: "Watches",
    id: "8",
    img: "/src/assets/products/w(3).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['gray','blue','white','green',]
  },]
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed:2000,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
  <div className='pb-[100px] bg-gray-100' id='products'>
    <div className='New container m-auto'>
        <p className=' lg:regular-64 regular-40  text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 '>Populers</p>
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