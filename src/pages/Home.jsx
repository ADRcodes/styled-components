import React from "react"
import Accordian from "../components/Accordian"
import AltNav from "../components/AltNav"
import Buttons from "../components/Buttons"
import Hero from "../components/Hero"
import Layout1 from "./Layout1"
import StylingPage from "./StylingPage"

const Home = () => {
  return (
    <div>
      {/* <StylingPage /> */}
      <Hero />
      <AltNav />
      <Layout1 />
      <Buttons />
      <Accordian />
    </div>
  )
}

export default Home
