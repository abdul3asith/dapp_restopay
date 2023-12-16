"use client"
import React from 'react'
import { FaStar } from "react-icons/fa";
import Image from 'next/image';
import Cake from '@/public/assets/caje.jpeg'
import veg from '../public/assets/veg1.png'
import { useLocalStorage } from './localStorage';


const Starters = () => {
  const [cart, setCart] = useLocalStorage('cart')
  const addToCart = (itemCode, quantity, price, name) => {
    let newCart = {...cart};

    if(itemCode in newCart) {
     newCart[itemCode].quantity = newCart[itemCode].quantity + quantity
    } 
    else {
     newCart[itemCode] = {quantity: 1, price, name}
    }
  
setCart(newCart)  
  }
  return (
    <div className="mt-5 px-3">
        <div className="my-3 px-1 text-[18px] text-[#0d0d0d] text-center">Starters</div>
        <div className="flex justify-between items-center mt-5">
          <div className="flex flex-col justify-start items-start">
          <Image alt='' height={100} width={100}   className="h-5 w-6" src={veg}/>
         <div className="text-[16px] text-[#424242] mt-[2px] mb-1">Chicken Wings</div>
         <div>  &#8377;349</div>
         <div className='flex justify-center items-center text-green-600 '>
         4 <FaStar className='ml-1'/> <div className='ml-2 text-[#737373]'>(456)</div>
         </div>
         {/* <div className='bg-red-400 rounded-lg px-6 py-1 text-sm mt-2 text-white'>
          Add
         </div> */}
          </div >
          {/* img and buttton */}
         <div className='flex justify-center items-center flex-col-reverse'>
         <button onClick={() => (addToCart("chicken wings",1, 499, 'chicken wings'))} className='bg-[#f25244] rounded-lg px-7 py-[6px]  -mt-4 w-fit z-20 text-white'>
          Add
         </button>
<Image src={Cake} height={100} alt='' width={100} className='w-36 h-32 rounded-lg z-10'/>

         </div>
        </div>
        <div className='bg-gray-300 h-[1px] my-7 w-full ' />
          {/* 2 */}
          <div className="flex justify-between items-center mt-5">
          <div className="flex flex-col justify-start items-start">
          <Image alt='' height={100} width={100}   className="h-5 w-6" src={veg}/>
         <div className="text-[16px] text-[#424242] mt-[2px] mb-1">Swedesh Cheese Cake</div>
         <div>  &#8377;199</div>
         <div className='flex justify-center items-center text-green-600 '>
         4 <FaStar className='ml-1'/> <div className='ml-2 text-[#737373]'>(456)</div>
         </div>
         {/* <div className='bg-red-400 rounded-lg px-6 py-1 text-sm mt-2 text-white'>
          Add
         </div> */}
          </div >
          {/* img and buttton */}
         <div className='flex justify-center items-center flex-col-reverse'>
         <button onClick={addToCart}  className='bg-[#f25244] rounded-lg px-7 py-[6px]  -mt-4 w-fit z-20 text-white'>
          Add
         </button>
<Image src={Cake} alt='' height={100} width={100} className='w-36 h-32 rounded-lg z-10'/>

         </div>
        </div>
        <div className='bg-gray-300 h-[1px] my-7 w-full '/>
        {/* 3 */}
        <div className="flex justify-between items-center mt-5">
          <div className="flex flex-col justify-start items-start">
          <Image alt='' height={100} width={100}   className="h-5 w-6" src={veg}/>
         <div className="text-[16px] text-[#424242] mt-[2px] mb-1">Swedesh Cheese Cake</div>
         <div>  &#8377;199</div>
         <div className='flex justify-center items-center text-green-600 '>
         4 <FaStar className='ml-1'/> <div className='ml-2 text-[#737373]'>(456)</div>
         </div>
         {/* <div className='bg-red-400 rounded-lg px-6 py-1 text-sm mt-2 text-white'>
          Add
         </div> */}
          </div >
          {/* img and buttton */}
         <div className='flex justify-center items-center flex-col-reverse'>
         <button onClick={addToCart}  className='bg-[#f25244] rounded-lg px-7 py-[6px]  -mt-4 w-fit z-20 text-white'>
          Add
         </button>
<Image src={Cake} alt='' height={100} width={100} className='w-36 h-32 rounded-lg z-10'/>

         </div>
        </div>
        <div className='bg-gray-300 h-[1px] my-7 w-full '/>
      </div>
  )
}

export default Starters