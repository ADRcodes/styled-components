import React from "react"
import { useInView } from "react-intersection-observer"

const OnScroll = ({ div, animation }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView()

  const animationVariants = {
    slide_in: "animate-slide_in",
    roll_in1: "roll-in1",
    roll_in2: "roll-in2",
    roll_in3: "roll-in3",
    fade_in: "fade-in",
  }

  return (
    <div
      className={`${myElementIsVisible ? animationVariants[animation] : ""}`}
      ref={myRef}>
      {div}
    </div>
  )
}

export default OnScroll
