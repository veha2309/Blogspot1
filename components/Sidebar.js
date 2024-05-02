"use client"
import React from 'react'
import { useState } from 'react'
import styles from "@/components/Sidebar.module.css"
import Link from 'next/link'

const Sidebar = () => {
  const [IsOpen, setIsOpen] = useState(false)
  const toggleSidebar = () => {
    setIsOpen(!IsOpen)
  }
  return (
    <>
    <div className='z-1'>
        <button onClick={toggleSidebar} className='text-white flex gap-3 items-center mt-5 ml-6 absolute'><script src="https://cdn.lordicon.com/lordicon.js"></script>
        <lord-icon
          src="https://cdn.lordicon.com/ipnwkgdy.json"
          trigger="hover"
          colors="primary:#ffffff"
          className="w-[250px] h-[250px]">
        </lord-icon>Menu</button>
        
      <div className={`${styles.sidebar} ${IsOpen ? styles.open : ""}`}>
        <ul className='pt-16 flex flex-col'>
          <Link href= "/" className='pl-10 h-20 flex items-center text-lg font-mono w-full hover:bg-[#464646] transition-all'><li>Home</li></Link>
          <Link href= "/about" className='pl-10 h-20 flex items-center text-lg font-mono w-full hover:bg-[#464646] transition-all'><li>About</li></Link>
          <Link href= "/contact" className='pl-10 h-20 flex items-center text-lg font-mono w-full hover:bg-[#464646] transition-all'><li>Contact</li></Link>
        </ul>
      </div></div></>
  )
}

export default Sidebar