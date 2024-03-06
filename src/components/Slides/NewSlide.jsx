/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";
const NewSLide = () => {const items =[ {
    title: 'I Pad Pro 11 Inch',
    type: "Laptops",
    id: "1",
    img: "/src/assets/products/lab (1).png",
    oldPrice: 22000,
    newPrice: 17000,
    colors:['gray','blue','black']
  },
  {
    title: 'I Pad Pro 14 Inch',
    type: "Laptops",
    id: "2",
    img: "/src/assets/products/lab (2).png",
    oldPrice: 26000,
    newPrice: 18000,
    colors:['gray','blue','black']
  },
  {
    title: 'I Pad Pro 16 Inch',
    type: "Laptops",
    id: "3",
    img: "/src/assets/products/lab (3).png",
    oldPrice: 39000,
    newPrice: 30000,
    colors:['gray','blue','black']
    }]
  var settings = {
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
        <p className='lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 '>News Products</p>
    <Slider {...settings}>
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