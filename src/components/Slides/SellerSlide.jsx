/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";
const SellerSlide = () => {
  
  const items = [{
    title: 'Gaming HeadPhones',
    type: "Accessories",
    id: "15",
    img: "/src/assets/products/h (2).webp",
    oldPrice: 3200,
    newPrice: 2000,
    colors:['yellow','black','purple',]
  },
  {
    title: 'Gaming HeadPhones',
    type: "Accessories",
    id: "16",
    img: "/src/assets/products/h (3).webp",
    oldPrice: 3200,
    newPrice: 2805,
    colors:['yellow','black','purple',]
  },
  {
    title: 'Apple Penscil',
    type: "Accessories",
    id: "17",
    img: "/src/assets/products/a (1).webp",
    oldPrice: 3200,
    newPrice: 2800,
    colors:['yellow','black','purple',]
  },
  {
    title: 'HeadPhones',
    type: "Accessories",
    id: "18",
    img: "/src/assets/products/a (2).webp",
    oldPrice: 3200,
    newPrice: 2834,
    colors:['yellow','black','purple',]
  },
  {
    title: 'HeadPhones',
    type: "Accessories",
    id: "19",
    img: "/src/assets/products/a (3).webp",
    oldPrice: 3200,
    newPrice: 2500,
    colors:['yellow','black','purple',]
  },
  {
    title: 'HeadPhones',
    type: "Accessories",
    id: "20",
    img: "/src/assets/products/a (4).webp",
    oldPrice: 3200,
    newPrice: 2222,
    colors:['yellow','black','purple',]
  },]
  var settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    arrows: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1
  };
  return (
  <div className='pb-[100px] bg-gray-100' id='products'>
    <div className='New container m-auto'>
        <p className='regular-64 sm:regual-32 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10 mx-[500px] '>Best Seller</p>
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

export default SellerSlide