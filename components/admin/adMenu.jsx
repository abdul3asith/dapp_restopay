import Image from 'next/image';
import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import bir from '../../public/assets/cakd.jpeg'
import connectMongoDB from '@/middleware/mongoose';
import Data from '@/models/data'
import mongoose from "mongoose";
import { assetPrefix } from '@/next.config';

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

const AdMenu = async() => {
  const  data   = await getData();
  // console.log(data)
  
  return (
    <div>
        <div className='flex flex-col  w-full px-10'>
        <div className='text-3xl text-[#f25244]  mt-10 mb-4'>
            Menu
        </div>
        <div className='flex items-center gap-2 text-white w-fit cursor-pointer bg-black px-6 py-2 rounded-md font-bold'>
            <div>Add Menu</div> <CiCirclePlus  className='h-6  w-6'/>
        </div>
<div>
 <div className='rounded-lg w-full border-t-4 shadow-md flex flex-col gap-2 bg-zinc-300/50 px-7 my-7 border-[#f25244]'>

{data.menu.map((d) =>(<div key={d._id} className='flex items-center gap-4 mt-3'>
  {/* <div>Sl No.</div> */}
  <div>
    <Image src={d.img} height={100} width={100} alt='' className='h-24 rounded-md w-28' />
  </div>
  <div>{d.title}</div>
  <div>&#8377;{d.price}</div>
  <div>{d.category}</div>
  <div>{d.desc}</div>
  <div>{d.rating}</div>
  <div>{d.rating_no}</div>
  {/* <div>Veg or Non-veg
    img
  </div> */}
  
  <div className='px-4 py-1 text-center bg-[#f25244] text-white rounded-md'>Edit</div>
  <div className='px-4 py-1 text-center bg-[#000] text-white rounded-md'>Delete</div>
 </div>
 ))} 
 </div>
</div>
        </div>
       
    </div>
  )
}

// export async function getServerSideProps(context) {
//   await connectMongoDB();
//   const menu = await Data.find();
//   // NextResponse.json({menu});
//   // try {
//   //   await  mongoose.connect(process.env.MONGO_URI);
//   //     // console.log("connected to mongodb");
//   // } catch (error) {
//   //     console.log(error);
//   // }
//   console.log(menu)
//   return{
//     props: {menu: JSON.parse(JSON.stringify(menu))},
//   }
// }
export default AdMenu