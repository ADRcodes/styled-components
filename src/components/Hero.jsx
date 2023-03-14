import React from "react"
import logo from "/vite.svg"

const Hero = () => {
  return (
    <div className="flex h-[50vh] justify-center bg-neutral-200">
      <div className="flex flex-col justify-center content-center md:w-1/3 w-1/2">
        <h1 className="heading1">One-liner for the product</h1>
        <h3 className="heading3 p-4 rounded-lg bg-primary dark:bg-primary_dark">
          Brief description of what the product does and maybe a benefit
        </h3>
      </div>
      <div className="flex flex-col justify-center items-center content-center md:w-1/3 w-1/2 p-4">
        <img
          width="200"
          src={logo}
          alt="Hero video"
        />
      </div>
    </div>
  )
}

export default Hero
