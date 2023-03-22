import React from "react"
import logo from "/vite.svg"
import ThemeIcon from "./ThemeIcon"

const Nav = () => {
  return (
    <div className="w-full flex items-center justify-between bg-primary dark:bg-primary_dark p-2">
      <div className="flex items-center pr-4">
        <img
          className="mx-2"
          width="30"
          src={logo}
        />
        <a href="#">InQ</a>
      </div>
      <div className="hidden md:flex">
        <p className="inline-block  mr-6 font-bold">Home</p>
        <p className="inline-block  mr-6 font-bold">About</p>
        <p className="inline-block  mr-6 font-bold">Pricing</p>
        <ThemeIcon />
      </div>
      <p className="hidden md:block px-2">Login</p>
      <p className="block md:hidden px-2">Burger</p>
    </div>
  )
}

export default Nav
