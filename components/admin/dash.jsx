import React from 'react'
import AdMenu from './adMenu'
// import Analytics from './analytics'
import Link from 'next/link'
import Sidebar from './sidebar'

const Dashboard = () => {
  return (
    <div>
        <div className='flex '>
          <div className='w-[20%]'>
<Sidebar />
          </div>
          <AdMenu />
        </div>
    </div>
  )
}

export default Dashboard