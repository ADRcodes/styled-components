import React, { useLayoutEffect, useRef, useState } from "react"
import ReactDOM from "react-dom"

const OnScroll = () => {
  const [show, doShow] = useState({
    itemOne: false,
    itemTwo: false,
    itemThree: false,
  })
  const [percentShown, setPercentShow] = useState({
    itemOne: 0,
    itemTwo: 0,
    itemThree: 0,
  })
  const ourRef = useRef(null),
    anotherRef = useRef(null),
    refThree = useRef(null)

  useLayoutEffect(() => {
    const topPos = (element) => element.getBoundingClientRect().top
    const getHeight = (element) => element.offsetHeight
    const div1Pos = topPos(ourRef.current),
      div2Pos = topPos(anotherRef.current),
      div3Pos = topPos(refThree.current)

    const div3Height = getHeight(refThree.current)

    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight

      // Element scrolled to
      if (div1Pos < scrollPos) {
        doShow((state) => ({ ...state, itemOne: true }))
      }
      // Element scrolled away (up)
      // if (div1Pos > scrollPos) {
      //   doShow(state => ({ ...state, itemOne: false }));
      // }

      if (div2Pos < scrollPos) {
        doShow((state) => ({ ...state, itemTwo: true }))
      }

      if (div3Pos < scrollPos) {
        // Element scrolled to
        doShow((state) => ({ ...state, itemThree: true }))

        let itemThreePercent = ((scrollPos - div3Pos) * 100) / div3Height
        if (itemThreePercent > 100) itemThreePercent = 100
        if (itemThreePercent < 0) itemThreePercent = 0

        setPercentShow((prevState) => ({
          ...prevState,
          itemThree: itemThreePercent,
        }))
      } else if (div3Pos > scrollPos) {
        // Element scrolled away (up)
        doShow((state) => ({ ...state, itemThree: false }))
      }
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div>
      <div
        className="translate-x-[100px] duration-300"
        animate={show.itemThree}
        animatePercent={percentShown.itemThree}
        ref={refThree}>
        <p>tag here</p>
        <p>tag here</p>
        <p>tag here</p>
        <p>tag here</p>
      </div>
      <div
        animate={show.itemTwo}
        ref={anotherRef}
      />
      <div
        animate={show.itemOne}
        ref={ourRef}
      />
    </div>
  )
}

export default OnScroll
