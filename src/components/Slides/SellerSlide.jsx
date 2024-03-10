/* eslint-disable react/jsx-key */
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../ProductCard";
import h2 from "../../assets/products/h(2).webp";
import h3 from "../../assets/products/h(3).webp";
import a1 from "../../assets/products/a(1).webp";
import a2 from "../../assets/products/a(2).webp";
import a3 from "../../assets/products/a(3).webp";
import a4 from "../../assets/products/a(4).webp";
const SellerSlide = () => {
  const items = [
    {
      title: "Gaming HeadPhones",
      type: "Accessories",
      id: "15",
      img: h2,
      oldPrice: 3200,
      newPrice: 2000,
      colors: ["yellow", "black", "purple"],
    },
    {
      title: "Gaming HeadPhones",
      type: "Accessories",
      id: "16",
      img: h3,
      oldPrice: 3200,
      newPrice: 2805,
      colors: ["yellow", "black", "purple"],
    },
    {
      title: "Apple Penscil",
      type: "Accessories",
      id: "17",
      img: a1,
      oldPrice: 3200,
      newPrice: 2800,
      colors: ["yellow", "black", "purple"],
    },
    {
      title: "HeadPhones",
      type: "Accessories",
      id: "18",
      img: a2,
      oldPrice: 3200,
      newPrice: 2834,
      colors: ["yellow", "black", "purple"],
    },
    {
      title: "HeadPhones",
      type: "Accessories",
      id: "19",
      img: a3,
      oldPrice: 3200,
      newPrice: 2500,
      colors: ["yellow", "black", "purple"],
    },
    {
      title: "HeadPhones",
      type: "Accessories",
      id: "20",
      img: a4,
      oldPrice: 3200,
      newPrice: 2222,
      colors: ["yellow", "black", "purple"],
    },
  ];
  const settings = {
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
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
    <div className="pb-[100px] bg-gray-100" id="products">
      <div className="New container m-auto">
        <p className="lg:regular-64 regular-40 text-center border-b-2 border-b-second-900 py-10 pb-5 mb-10  ">
          Best Seller
        </p>
        <Slider {...settings}>
          {items.map((item) => {
            return (
              <ProductCard
                title={item.title}
                img={item.img}
                oldPrice={item.oldPrice}
                newPrice={item.newPrice}
                colors={item.colors}
                id={item.id}
              />
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default SellerSlide;
