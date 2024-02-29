import React from 'react'
import Image from 'next/image'
const Main  = () => {
  return (
    <div>
        <Image src='/Main.jpg' width={800} height={600}alt='main' />
        <ul className="steps">
  <li className="step step-primary">Choose Location</li>
  <li className="step step-primary">Order Online </li>
  <li className="step">Purchase</li>
  <li className="step">Pick UP</li>
</ul>
        <h1>AWESOME POKÉ, AWESOME PEOPLE</h1>
        <button>ORDER NOW!</button>
        
    </div>
  )
}

export default Main;