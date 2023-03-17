import React from 'react'

export default function HeaderLanding() {
  return (
    <div className="relative py-24 px-4" >
      <div className="z-20 relative text-white container mx-auto">
        <h1 style={{textAlign: "center", marginTop: "-4rem"}} className="text-5xl font-bold text-orange-500">Typing the Cinema</h1>
      </div>
      <div className="absolute inset-0 h-auto z-10">
        <img src="https://www.viva-media.ca/wp-content/uploads/header-culture-cinema.jpg" alt="" className="h-full w-full object-fit-cover"/>
      </div>
    </div>
  )
}
