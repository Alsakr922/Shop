
import Hero from './Hero';
import Categorys from './Categorys';
import PopulerSlide from './Slides/PopulerSlide';
import NewSLide from './Slides/NewSlide';
import SellerSlide from './Slides/SellerSlide';

const Home = () => {
  return (
    <div>
      <Hero />
      <Categorys />
      <PopulerSlide />
      <NewSLide />
      <SellerSlide />
    </div>
  )
}

export default Home