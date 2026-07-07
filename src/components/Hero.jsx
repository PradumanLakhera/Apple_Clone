import React from 'react'

const Hero = () => {
  return (
   <section id = "hero">
    <div> 
    <h1 className='Macbook'> Macbook Pro</h1>
    <img src = "/title.png" alt = "Macbook Title" />
    </div>
    <video src = "/videos/hero.mp4" autoPlay muted playsInline />
    <button className = "buy-btn"> Buy </button>
    <p className='para'> From $6700 or $670/mo for 6-7 months </p>
    
    </section>
  )
}

export default Hero
