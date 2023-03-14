import React from "react"
import Footer1 from "../components/Layout1/Footer1"
import Hero1 from "../components/Layout1/Hero1"
import SmallTextSection1 from "../components/Layout1/SmallTextSection1"
import TwoCardsWLrgImg from "../components/Layout1/TwoCardsWLrgImg"
import Nav from "../components/Nav"

const Layout1 = () => {
  return (
    <div>
      <Nav />
      <Hero1 />
      <SmallTextSection1 />
      <TwoCardsWLrgImg />
      <SmallTextSection1 />
      <Footer1 />
    </div>
  )
}

export default Layout1
