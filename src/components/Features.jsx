import fe1 from '../assets/features/f1.png'
import fe2 from '../assets/features/f2.png'
import fe3 from '../assets/features/f3.png'
import fe4 from '../assets/features/f4.png'
import fe5 from '../assets/features/f5.png'
import fe6 from '../assets/features/f6.png'


const Features = () => {
  return (
    <div className='py-5 bg-gray-100'>
      <section className="features grid xl:grid-cols-6 lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 px-20 py-10">
  <div className="box w-[200px] hover:scale-105  cursor-pointer border border-[#cce7d0]  rounded my-4 mx-0 text-center py-6">
    <img src={fe1} className="p-3" alt="" />
    <h6 className="inline-block  pt-[9px] px-[8px] pb-[6px] text-lg font-semilight bg-[#fddde4] mt-1 rounded text-main">Free Shipping</h6>
  </div>
  <div className="box w-[200px] hover:scale-105  cursor-pointer border border-[#cce7d0]  rounded my-4 mx-0 text-center py-6">
    <img src={fe2} className="p-3" alt="" />
    <h6 className="inline-block  pt-[9px] px-[8px] pb-[6px] text-lg font-semilight bg-[#cdebbc] mt-1 rounded text-main">Online Order</h6>
  </div>
  <div className="box w-[200px] hover:scale-105  cursor-pointer border border-[#cce7d0]  rounded my-4 mx-0 text-center py-6">
    <img src={fe3} className="p-3" alt="" />
    <h6 className="inline-block  pt-[9px] px-[8px] pb-[6px] text-lg font-semilight  bg-[#d1e8f2] mt-1 rounded text-main">Save Money</h6>
  </div>
  <div className="box w-[200px] hover:scale-105  cursor-pointer border border-[#cce7d0]  rounded my-4 mx-0 text-center py-6">
    <img src={fe4} className="p-3" alt="" />
    <h6 className="inline-block  pt-[9px] px-[8px] pb-[6px] text-lg font-semilight bg-[#cdd4f8] mt-1 rounded text-main">Promotions</h6>
  </div>
  <div className="box w-[200px] hover:scale-105  cursor-pointer border border-[#cce7d0]  rounded my-4 mx-0 text-center py-6" >
    <img src={fe5} className="p-3" alt="" />
    <h6 className="inline-block  pt-[9px] px-[8px] pb-[6px] text-lg font-semilight bg-[#f6dbf6] mt-1 rounded text-main">Happy Sell</h6>
  </div>
  <div className="box w-[200px] hover:scale-105  cursor-pointer border border-[#cce7d0]  rounded my-4 mx-0 text-center py-6">
    <img src={fe6} className="p-3" alt="" />
    <h6 className="inline-block  pt-[9px] px-[8px] pb-[6px] text-lg font-semilight bg-[#fff2e5] mt-1 rounded text-main">F24/7 Support</h6>
  </div>
</section>
    </div>
  )
}

export default Features