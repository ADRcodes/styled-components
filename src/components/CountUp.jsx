import React from "react"
import { useSpring, animated } from "react-spring"

const Number = ({ n }) => {
  const { number } = useSpring({
    from: { number: 0 },
    number: n,
    delay: 200,
    config: { mass: 1, tension: 20, friction: 10 },
  })
  return (
    <animated.div className="bg-primary_light p-5 rounded-full text-5xl w-max">
      {number.to((n) => n.toFixed(0))}
    </animated.div>
  )
}

const CountUp = ({ num }) => {
  return (
    <div>
      <Number n={num} />
    </div>
  )
}

export default CountUp
