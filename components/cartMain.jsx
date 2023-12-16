
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";

const CartMain = ({ cart, addToCart, removeFromCart, clearCart, subTotal } ={}) => {
  console.log(cart);
  return (
    <div className="flex justify-center  ">
      <div className="  w-full ">
        <div className="top-0 bg-white sticky py-3 w-full px-4 ">
          <div className="flex justify-between items-center">
            <button onClick={clearCart} className="flex justify-center">
              <div>Empty Cart</div>{" "}
              <IoMdArrowDropright className="h-6 text-[#f25244] w-6" />
            </button>
            <button className="px-6 py-1 text-white bg-[#f25244] w-fit rounded-md">
              Order
            </button>
          </div>
        </div>
        <div className="text-center text-xl my-4">Cart</div>
        <div className="w-full bg-white rounded-lg px-6 py-4 flex flex-col gap-9 max-w-[350px] mx-5">
            {Object.keys(cart).length == 0 && <div className="text-[#737373]">
                Cart is Empty. Add Delicious Items!
            </div> }
         {Object.keys(cart).map((k) =>{ return <div key={k} className="flex justify-between flex-1 ">
            <div>
              <div>{cart[k].name}</div>
              <div className="text-sm">{cart[k].price}</div>
              {/* edit button */}
              {/* how much time it takes to prepare, which gives customers wise choice to pick dishes to eat */}
              <div className="text-xs text-[#737373]">
                Served in <span className="text-[#f25244]">15 mins</span>
              </div>

              {/* add cooking instructions - post and get requests*/}
            </div>
            <div className="flex flex-col justify-start items-end gap-1">
              <div className="flex justify-start gap-[14px] items-center">
                <div className="bg-[#f25244] rounded-full p-[6px] text-white">
                  <FaMinus />
                </div>
                <div className="text-xl">{cart[k].quantity}</div>
                <div className="bg-[#f25244] rounded-full p-[6px] text-white">
                  <FaPlus />
                </div>
              </div>
              <div className="text-md mt-1">&#8377;560</div>
            </div>
          </div>
})} 
        </div>
        <div className="mt-3 text-center text-lg">
          <div>Add More Items 😋</div>
        </div>

        <div className="flex flex-col gap-11">
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
          <div>hello</div>
        </div>
      </div>
    </div>
  );
};

export default CartMain;
