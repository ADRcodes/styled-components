import React from "react"
import { Link, Outlet } from "react-router-dom"
import logo from "/vite.svg"
import ThemeIcon from "./ThemeIcon"

const Nav = () => {
  return (
    <>
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
          <Link
            to="/"
            className="inline-block  mr-6 font-bold">
            Home
          </Link>
          <Link
            to="/About"
            className="inline-block  mr-6 font-bold">
            About
          </Link>
          <Link
            to="/Pricing"
            className="inline-block  mr-6 font-bold">
            Pricing
          </Link>
          <Link
            to="/layout1"
            className="inline-block  mr-6 font-bold">
            Layout 1
          </Link>
          <Link
            to="/bellroy"
            className="inline-block  mr-6 font-bold">
            Bellroy
          </Link>
          <ThemeIcon />
        </div>
        <p className="hidden md:block px-2">Login</p>
        <p className="block md:hidden px-2">Burger</p>
      </div>
      <Outlet />
    </>
  )
}

export default Nav
