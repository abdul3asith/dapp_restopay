"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const RegisterForm = () => {

    const [restoname, setRestoname] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword ] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = async (e) => {
        e.preventDefault();

        if ( !restoname || !name  || !email || !password ) {
            setError("all fields are necessary.");
            return;
        }

        try {
           const res =  await fetch('../api/register',{
            method: "POST",
            headers : {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                restoname, name, email, password
            }),
        });
        if(res.ok) {
            const form = e.target;
            form.reset();
        }
        else {
            console.log("user registration failed")
        }
        } catch (error) {
            console.log("Error during registration:", error);
        }
    };
  return (
    <div className='grid place-items-center h-screen'>
    <div className='shadow-lg p-5 rounded-lg border-t-4 border-[#f25244]' >
      <h1 className='text-xl font-bold my-4 '>Register Your Restaurant</h1>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3' 
      >
        <input onChange={(e) => setRestoname (e.target.value)} type="text" placeholder='Restaurant Name' />
        <input onChange={(e) => setName (e.target.value)} type="text" placeholder='Owner Name' />
        <input onChange={(e) => setEmail (e.target.value)} type="text" placeholder='Email' />
        <input onChange={(e) => setPassword (e.target.value)} type="password" placeholder='Password' />
        <button className='bg-[#f25244] text-white font-bold  cursor-pointer px-6 py-2'>Register</button>
        { error && (
        <div className='bg-red-500 text-sm py-1 px-3 rounded-md w-fit text-white'>
          {error}
        </div>)}
        <Link className='text-sm mt-3 text-right' href={'/admin/login'}>
          Already have an account? <span className='underline'>Login</span>
        </Link>
      </form>
    </div>
</div>
  )
}

export default RegisterForm