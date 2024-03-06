import { Button } from "@material-tailwind/react"
const Hero = () => {
  return (
    <div className='lg:p-[200px] h-[100vh]'>

        <div className='home2  h-[80vh] '>
        <div className='space-y-10'>
          <h1 className='regular-64'>70% Ramadan Sale</h1>
          <p className='regular-64'>All Products</p>
          <Button
            type='submit'
            className='btn px-10 py-3 w-40 hover:text-primary-700 bg-trabsparent border-none shadow-none hover:shadow-none'
            size='lg' >
            Discover
            </Button>
        </div>
        </div>
    </div>
  )
}

export default Hero