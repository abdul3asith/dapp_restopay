"use client"
import React, { useState } from 'react'
import { useRouter } from 'next/navigation';

const MenuForm = () => {
    const [img, setImg] = useState("");
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [category, setCategory] = useState("");
    const [desc, setDesc] = useState("");
    const [rating, setRating] = useState("");
    const [rating_no, setRating_no] = useState("");

    const router = useRouter();
    const handleSubmit = async(e) => {
            e.preventDefault();
            
              const res =   await fetch('http://localhost:3000/api/dataOps', {
                    method: "POST",
                    headers:{
                        'Content-type': "application/json",
                    },
                    body : JSON.stringify({img, title, price, category,desc,  rating, rating_no})
                });
                if(res.ok) {
                    router.push('/admin')
                }
                else{
                    throw new error('Failed to add Menu')
                }
            }
  
  return (
    <div>
         <form onSubmit={handleSubmit} className='my-4 flex flex-col gap-5'>
        <input  onChange={(e) => setImg(e.target.value)} value={img} type="text" placeholder='Image'  className='border border-slate-500 px-8 py-2'/>
        <input  onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder='Name'  className='border border-slate-500 px-8 py-2'/>
        <input  onChange={(e) => setPrice(e.target.value)} value={price} type="text" placeholder='Price'  className='border border-slate-500 px-8 py-2'/>
        <input onChange={(e) => setCategory(e.target.value)} value={category} type="text" placeholder='Category'  className='border border-slate-500 px-8 py-2'/>
        <input onChange={(e) => setDesc(e.target.value)} value={desc} type="text" placeholder='Description'  className='border border-slate-500 px-8 py-2'/>
        <input onChange={(e) => setRating(e.target.value)} value={rating} type="text" placeholder='Rating'  className='border border-slate-500 px-8 py-2'/>
        <input onChange={(e) => setRating_no(e.target.value)} value={rating_no} type="text" placeholder='No of People Rated'  className='border border-slate-500 px-8 py-2'/>
        <button type='submit' className='bg-red-600 py-2 px-6 w-fit'>Add Menu</button>
    </form>
    </div>
  )
}

export default MenuForm