import React from 'react'

const UserInfo = () => {
  return (
    <div className='grid place-items-center h-screen'>
            <div className='shadow-lg p-8 bg-zinc-300/10 flex flex-col gap-2 my-6'>
                <div>
                    Restaurant Name: <span className='font-bold'>Cafe 7</span>
                </div>
                <div>
                    Owner Name: <span className='font-bold'>john Doe</span>
                </div>
                <div>
                    Email: <span className='font-bold'>john23@gmail.com</span>
                </div>
                <button className='bg-red-500 font-bold px-6 py-2 mt-3 text-white'>Log Out</button>
            </div>
    </div>
  )
}

export default UserInfo