import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import Cake from '@/public/assets/caje.jpeg'
// import Veg from '@public/assets/veg.png'

const getData = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/dataOps", {
      cache: "no-store",
    });
    if (!res.ok) {
      throw new Error("failed to fetch topics");
    }
    return res.json();
  } catch (error) {
    console.log("err loading topics:", error);
  }
};
const Biryani = async() => {
  const  data   = await getData({"category": "biryanis"});
  // console.log(menu)
  // console.log(data)
  return (
    <div className="mt-5 px-3">
        
        <div className="my-3 px-1 text-[18px] text-[#0d0d0d] text-center">Biryani</div>
        {data.menu.map((d) => (<div key={d._id} className="flex justify-between items-center mt-5">
          <div className="flex flex-col justify-start items-start">
          <img   className="h-5 w-5s" src='../assets/veg1.png' alt="vegetarian-food-symbol"/>
         <div className="text-[16px] text-[#424242] mt-[2px] mb-1">{d.title}</div>
         <div>  &#8377;{d.price}</div>
         <div className='flex justify-center items-center text-green-600 '>
         {d.rating} <FaStar className='ml-1'/><div className='ml-2 text-[#737373]'>({d.rating})</div>
         </div>
         {/* <div className='bg-red-400 rounded-lg px-6 py-1 text-sm mt-2 text-white'>
          Add
         </div> */}
          </div >
          {/* img and buttton */}
         <div className='flex justify-center items-center flex-col-reverse'>
         <div className='bg-[#f25244] rounded-lg px-7 py-[6px]  -mt-4 w-fit z-20 text-white'>
          Add
         </div>
<Image src={d.img} alt='' height={100} width={100} className='w-36 h-32 rounded-lg z-10'/>

         </div>
        </div>))}
        <div className='bg-gray-300 h-[1px] my-7 w-full ' />
        
        {/* <div className='bg-gray-300 h-[1px] my-7 w-full '/> */}
      </div>
  )
}

export default Biryani