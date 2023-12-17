import Link from 'next/link'
import React from 'react'

const AnalyticsHome = () => {
  return (
    <div className='px-4  flex flex-col items-center py-5'>
        <div className='text-2xl text-center mb-6'>Analytics and Trends </div>
        <div>
        <div className='flex flex-wrap gap-x-9 gap-y-7'>
       <Link href='../../admin/graphPg'> <div className='flex items-center justify-center rounded-md px-10 py-6 text-lg bg-zinc-200 border-zinc-400 border cursor-pointer'>Margerita Pizza</div></Link>
        <div className='flex items-center justify-center rounded-md px-10 py-6 text-lg bg-zinc-200 border-zinc-400 border cursor-pointer'>Margerita Pizza</div>
        <div className='flex items-center justify-center rounded-md px-10 py-6 text-lg bg-zinc-200 border-zinc-400 border cursor-pointer'>Margerita Pizza</div>
        <div className='flex items-center justify-center rounded-md px-10 py-6 text-lg bg-zinc-200 border-zinc-400 border cursor-pointer'>Margerita Pizza</div>
        <div className='flex items-center justify-center rounded-md px-10 py-6 text-lg bg-zinc-200 border-zinc-400 border cursor-pointer'>Margerita Pizza</div>
        </div>
        </div>
    </div>
  )
}

export default AnalyticsHome