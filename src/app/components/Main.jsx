import React, { useState } from 'react'
import Image from 'next/image'
const Main  = () => {

  const handleClick = useState('');
  return (
    <div>
        <Image src='/Main.jpg' width={800} height={600}alt='main' />

        <h1>AWESOME POKÉ, AWESOME PEOPLE</h1>
        <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg" onClick={onClick} >Order NOW!</button>
        
    </div>
  )
}

export default Main;