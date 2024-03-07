/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";
import lab1 from '../../assets/products/lab(1).png'
import lab2 from '../../assets/products/lab(2).png'
import lab3 from '../../assets/products/lab(3).png'

const NewSLide = () => {
  const items = [
    {
    title: 'I Pad Pro 11 Inch',
    type: "Laptops",
    id: "1",
    img: lab1,
    oldPrice: 22000,
    newPrice: 17000,
    colors:['gray','blue','black']
  },
  {
    title: 'I Pad Pro 14 Inch',
    type: "Laptops",
    id: "2",
    img: lab2,
    oldPrice: 26000,
    newPrice: 18000,
    colors:['gray','blue','black']
  },
  {
    title: 'I Pad Pro 16 Inch',
    type: "Laptops",
    id: "3",
    img: lab3,
    oldPrice: 39000,
    newPrice: 30000,
    colors:['gray','blue','black']
    }]
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
        <p className='lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 '>News Products</p>
    <Slider {...settings} >
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

export default NewSLide