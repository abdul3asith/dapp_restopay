"use client"
import AnalyticsHome from '@/components/admin/analyticsHome'
import Sidebar from '@/components/admin/sidebar'
import React from 'react'

const Analytics = () => {
  return (
    <div className='flex'>
        <div className='w-[20%] sticky top-0 '><Sidebar /></div>
        <AnalyticsHome />
    </div>
  )
}

export default Analytics