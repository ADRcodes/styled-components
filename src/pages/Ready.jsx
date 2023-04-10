import React from "react"
import { Link } from "react-router-dom"
import logo from "/vite.svg"

const Ready = () => {
  return (
    <div className="bg-white">
      <div className="nav border-b-2 ">
        <Link
          to="/"
          className="inline-block p-2 font-bold">
          Ready
        </Link>
        <div className="flex">
          <div className="flex">
            <img
              className="mx-2"
              width="30"
              src={logo}
            />
            <img
              className="mx-2"
              width="30"
              src={logo}
            />
            <img
              className="mx-2"
              width="30"
              src={logo}
            />
            <img
              className="mx-2"
              width="30"
              src={logo}
            />
            <img
              className="mx-2"
              width="30"
              src={logo}
            />
          </div>
          <Link className="button1">Get Ready</Link>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <p>Your new calendar</p>
        <h1 className="text-6xl font-bold p-4">
          The calender you <span className="bg-violet-300">need to meet</span>
        </h1>
        <p>
          Ready evolves your calendar into a living, breathing multiplayer
          workspace for teams to instantly make your meetings better.
        </p>
      </div>
    </div>
  )
}

export default Ready
