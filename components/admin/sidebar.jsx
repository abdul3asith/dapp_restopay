import Link from 'next/link'
import React from 'react'

const Sidebar = () => {
  return (
    <div>
        <div className='w-full h-screen sticky  top-0 bg-[#f25244]'>
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
                 <Link href="../../admin/analytics"><div className='py-2 w-full hover:bg-[#4b4a4a] px-6 duration-300 cursor-pointer'>Analytics</div></Link> 
                </div>

                {/* <div  className='h-[1px] bg-gray-400   mx-5 my-12'/> */}

                <div>
                  <div className='bg-black px-6 py-2 rounded-md mx-7 mt-16 text-white flex justify-center cursor-pointer'>Log Out </div>
                </div>
             </div>
          </div>
    </div>
  )
}

export default Sidebar