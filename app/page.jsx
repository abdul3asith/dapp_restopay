"use client"
import Choice from "@/components/choice"
import Login from "./login/page"
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import {app} from '../config'
import {useRouter} from 'next/navigation';
import { useState, useEffect } from "react"

const Home = () => {
 const router = useRouter();
 const auth = getAuth(app);

 useEffect(() => {
  onAuthStateChanged(auth, (user) => {
    if(user) {
      router.push('/home')
    }
  });
 }, [auth, router]);
  return (
      <>
      <div>
      <div className='text-2xl text-center  text-yellow-500 bg-black px-6 py-4'>RestoPay</div>
       <div className="flex flex-col justify-center items-center top-11 bg-black rounded-lg pt-5 pb-2 overflow-hidden text-white mt-32 mx-5"> <h1 className="text-xl text-center mt-10 mb-5"> Sign In using OTP</h1>
        <Login />
        </div>
        {/* <div className="">Developed by ACUBECREATIVE</div> */}
      </div>
      
      </>  
   
  )
}

export default Home
