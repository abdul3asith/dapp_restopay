import Link from 'next/link'
import React from 'react'

const LoginForm = () => {
  return (
    <div className='grid place-items-center h-screen'>
        <div className='shadow-lg p-5 rounded-lg border-t-5 border-[#f25244]' >
          <h1 className='text-xl font-bold my-4 '>Enter the Details</h1>
          <form className='flex flex-col gap-3' 
          >
            <input type="text" placeholder='email' />
            <input type="password" placeholder='password' />
            <button className='bg-[#f25244] text-white font-bold  cursor-pointer px-6 py-2'>Login</button>
            <div className='bg-red-500 text-sm py-1 px-3 rounded-md w-fit text-white'>
              Error Message
            </div>
            <Link className='text-sm mt-3 text-right' href={'/admin/signup'}>
              Don&apos;t have an account? <span className='underline'>Register</span>
            </Link>
          </form>
        </div>
    </div>
  )
}

export default LoginForm