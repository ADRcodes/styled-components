import React from "react"
import Accordian from "../components/Accordian"
import Airbnb from "../components/Airbnb"
import Buttons from "../components/Buttons"
import Footer2 from "../components/footers/Footer2"
import Hero from "../components/Hero"
import StylingPage from "./StylingPage"

const Home = () => {
  return (
    <div>
      <StylingPage />
      <Hero />
      <Airbnb />
      <Buttons />
      <Accordian />
      <Footer2 />
    </div>
  )
}

export default Home
