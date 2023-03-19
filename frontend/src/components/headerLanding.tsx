import React from 'react'

export default function HeaderLanding() {
  return (
    <>
      <div className="inset-0 container mx-auto">
        <h1 
          style={{
            textAlign: "center",
            animation: "gradient-fade 1s ease-in-out infinite",
          }}
          className="text-8xl pt-4 pb-10 z-10 font-bold bg-gradient-to-r from-orange-500 to-red-500 text-transparent bg-clip-text">
            Typing the Cinema
        </h1>
      </div>
      <div>
       <img src="https://www.viva-media.ca/wp-content/uploads/header-culture-cinema.jpg" alt="" className=" w-full"/>
      </div>
    </>
  )
}
