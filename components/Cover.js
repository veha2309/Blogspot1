import React from 'react'
import styles from "@/components/image.module.css"
import Image from 'next/image'
const Cover = () => {
  return ( 
    <div className={`${styles.cover} absolute -z-[8]  flex justify-center items-center px-auto w-full h-fit`}>
        <img src="/assets/CoverPhoto.jpg" className={`w-[900px] ${styles.image}`}></img>
    </div>
  )
}

export default Cover