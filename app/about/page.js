import React from 'react'
import Sidebar from '@/components/Sidebar'
const page = () => {
  return (
    <>
    <Sidebar/>
    <div className="absolute h-full inset-0 w-full -z-10 bg-black text-white"></div>
    </>
  )
}

export default page