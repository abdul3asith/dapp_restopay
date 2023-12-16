import React from 'react'
import AdMenu from './adMenu'

const Dashboard = () => {
  return (
    <div>
        <div className='flex '>
          <div className='w-[20%] h-screen sticky  top-0 bg-[#f25244]'>
             <div className='flex-col flex  justify-between '>
                <div className='mt-10 text-white px-6'>
                  <div>Cafe 7, Banjara Hills</div>
                  <div>John Doe</div>
                  <div>johnDoe@gmail.com</div>
                </div>
                {/* <div  className='h-[1px] bg-gray-400   mx-5 my-12'/> */}

                <div className='flex flex-col gap-3 text-xl  text-white my-20'>
                  <div className='py-2 w-full hover:bg-[#4b4a4a] px-6 duration-300 cursor-pointer '>Menu</div>
                  {/* <div  className='h-[1px] bg-white  '/> */}
                  <div className='py-2 w-full hover:bg-[#4b4a4a] px-6 duration-300 cursor-pointer'>Orders</div>
                  {/* <div  className='h-[1px] bg-white  '/> */}
                  <div className='py-2 w-full hover:bg-[#4b4a4a] px-6 duration-300 cursor-pointer'>Inventory</div>
                  {/* <div  className='h-[1px] bg-white  '/> */}
                  <div className='py-2 w-full hover:bg-[#4b4a4a] px-6 duration-300 cursor-pointer'>Bill Payments</div>
                </div>

                {/* <div  className='h-[1px] bg-gray-400   mx-5 my-12'/> */}

                <div>
                  <div className='bg-black px-6 py-2 rounded-md mx-7 mt-16 text-white flex justify-center cursor-pointer'>Log Out </div>
                </div>
             </div>
          </div>
          <AdMenu />
        </div>
    </div>
  )
}

export default Dashboard