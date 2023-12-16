import Link from 'next/link'
import React from 'react'

const Choice = () => {
  return (
    <div className='h-screen  text-white'>
        
        {/* logo */}
        <div className='flex flex-col justify-center items-center gap-6 text-center pt-[70%] lg:pt-[20%]'>
            <Link href="/menu">
            <div className='px-6 py-2 text-black bg-yellow-400 '>
                explore menu
            </div>
            </Link>
            <div className='px-[52px] py-2 bg-black'>
                pay bill
            </div>

        </div>
    </div>
  )
}

export default Choice
// bg-[#f25244]