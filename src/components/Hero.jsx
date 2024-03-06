import { Button } from "@material-tailwind/react"
const Hero = () => {
  return (
    <div className='lg:p-[200px] p-[50px] h-[100vh]'>
        <div className='home h-[80vh] sm:flexCenter flexStart container m-auto'>
        <div className='space-y-10  text-center text-white lg:text-black'>
          <h1 className='lg:regular-64 regular-40'>70% Ramadan Sale</h1>
          <p className='lg:regular-64 regular-40'>All Products</p>
          <Button
            type='submit'
            className='btn px-10 py-3 w-40 hover:text-primary-700 text-white shadow-none hover:shadow-none'
            size='lg' >
            Discover
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Hero