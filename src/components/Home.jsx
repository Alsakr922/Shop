import Hero from "./Hero";
import Categorys from "./Categorys";
import PopulerSlide from "./Slides/PopulerSlide";
import NewSLide from "./Slides/NewSlide";
import SellerSlide from "./Slides/SellerSlide";
import Features from "./Features";
import Adds from "./Adds";
import Articles from "./Articles";
import FooterAdds from "./FooterAdds";

const Home = () => {
  return (
    <div>
      <Hero />
      <Features />
      <Categorys />
      <Adds />
      <PopulerSlide />
      <NewSLide />
      <SellerSlide />
      <Articles />
      <FooterAdds />
    </div>
  );
};

export default Home;
