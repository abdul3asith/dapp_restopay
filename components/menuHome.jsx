import Image from "next/image";
import React from "react";
import { IoSearch } from "react-icons/io5";
import { FaMicrophone } from "react-icons/fa";
import { HiAdjustmentsHorizontal } from "react-icons/hi2";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";
import IndiMenu from "./indiMenu";
import Starters from "./starters";
import Biryani from "./biryanis";
import logo from "../public/assets/R.png";
import Cart from "@/app/cart/page";
import burger from '../public/assets/burg.webp'

const MenuHome = () => {
  return (
    <div className=" pyb-4 bg-white">
      {/* logo and pay button right left */}
      <div className="sticky top-0 bg-white ">
        <div className="flex justify-between items-center  pb-3 bg-red-500 px-4 pt-3">
          {/* <div><Image height={100} width={100} src={logo} alt="" className='h-20 w-20 '/></div>
           */}
          <div className="">RestoPay</div>
          <div className="px-5 py-1 text-white bg-[#0d0d0d] rounded-lg cursor-pointer">
            pay
          </div>
        </div>
        {/* restaurant name */}
        <div className="text-sm text-[#1e1e1e] px-6 pt-3 pb-1">Drive Inn...</div>
        <div className="text-xs text-[#737373] px-6  pb-3">GachiBowli, Hyd.</div>
        {/*  */}
        {/* search bar f25244 f28379*/}
        <div className="px-4">
          <div className="flex items-center border rounded-xl overflow-hidden bg-gray-200 ">
            <input
              type="text"
              placeholder="Search, Order, Enjoy, Repeat!"
              className="px-4 py-3 w-full focus:outline-none text-sm bg-gray-200 border-none"
            />
            <button className="px-4 py-2 flex items-center ">
              <IoSearch className="h-6 w-6 text-[#737373]" />
              <div className="px-[6px] text-[#737373]">|</div>
              <FaMicrophone className="h-5 w-5 text-[#f25244]" />
            </button>
          </div>
        </div>

        {/* today's special */}
        {/* <div>
        <div className="mt-3 px-1 text-[18px] text-[#f25244] text-center">
          Today&apos;s Special ✨{" "}
        </div>
      </div> */}
        {/* sortby (and/or) filter */}
        <div className={`flex justify-start gap-3 items-center my-4  ${""} px-4 `}>
          <button className="text-[#424242] border-[1px]  border-[#737373] rounded-full px-4 py-1 flex items-center">
            <div className="mr-1 text-xs">Filter</div>{" "}
            <HiAdjustmentsHorizontal className="h-4 w-5" />
          </button>
          <div className="relative">
            <button className="text-[#424242] border-[1px] border-[#737373] rounded-full px-4 py-1 flex items-center">
              <div className="mr-[6px] text-xs">Sort By</div>
              <FaChevronDown className="h-4 w-3" />
            </button>

            {/* <div className="bg-white rounded-lg shadow-md border-[1px] border-[#737373] absolute w-[180px] mt-2 py-2 hidden">
            <div className="flex flex-col justify-start items-start gap-y-5">
                <ul className="text-sm  flex-nowrap ">
                  <li className="my-3 mx-3" >Relevant(default)</li>
                  <li className="my-3 mx-3" >Cost: Low to High</li>
                  <li className="my-3 mx-3" >Cost: Hight to Low</li>
                  <li  className="my-3 mx-3">Rating</li>
                </ul>
            </div>
          </div> */}
          </div>
          <Link href="../cart">
            <div className="px-5 py-1 text-white bg-[#f25244] rounded-lg ml-16">
              Cart
            </div>
          </Link>
        </div>
      </div>
      {/* menu */}
      {/* categories */}
      <div className="mt-5 ">
        <div className="my-3 px-1 text-[18px] text-[#f25244] text-center">
          Cuisines
        </div>

        <div className="flex flex-wrap gap-x-12 gap-y-6 mt-7 justify-between px-10 items-center">
          {" "}
          <Link href="/starter">
            <div className="flex flex-col justify-center items-center  gap-1">
              <Image className="rounded full w-24 h-24" height={100} width={100} alt="" src={burger}/>
              <div>Italian</div>
              <div className="text-xs">by Onsesta Pizzeia</div>
            </div>
          </Link>
          <Link href="/starter">
            <div className="flex flex-col justify-center items-center  gap-1">
              <Image className="rounded full w-24 h-24" height={100} width={100} alt="" src={burger}/>
              <div>Chinese</div>
              <div className="text-xs">by Chinese Bistro</div>
            </div>
          </Link>
          <Link href="/starter">
            <div className="flex flex-col justify-center items-center  gap-1">
              <Image className="rounded full w-24 h-24" height={100} width={100} alt="" src={burger}/>
              <div>Ice Cream</div>
              <div className="text-xs">by CreamStone</div>
            </div>
          </Link>
          <Link href="/starter">
            <div className="flex flex-col justify-center items-center  gap-1">
              <Image className="rounded full w-24 h-24" height={100} width={100} alt="" src={burger}/>
              <div>Beverages</div>
              <div className="text-xs">by Concu</div>
            </div>
          </Link>
          <Link href="/starter">
            <div className="flex flex-col justify-center items-center  gap-1">
              <Image className="rounded full w-24 h-24" height={100} width={100} alt="" src={burger}/>
              <div className="text-sm">Confectionaries</div>
              <div className="text-xs">by Magnolia</div>
            </div>
          </Link>
          <Link href="/starter">
            <div className="flex flex-col justify-center items-center  gap-1">
              <Image className="rounded full w-24 h-24" height={100} width={100} alt="" src={burger}/>
              <div>Momos</div>
              <div className="text-xs">by Nepal Momos</div>
            </div>
          </Link>
          <Link href="/biryanis">
            <div></div>
          </Link>
        </div>
        {/* <Starters cart={cart} addToCart={addToCart} removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}/> */}
        {/* <Biryani />
       <IndiMenu /> */}
      </div>
    </div>
  );
};

export default MenuHome;
