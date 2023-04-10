import React from "react"
import { useEffect, useState } from "react"

const MouseMove = () => {
  const [coords, setCoords] = useState({ x: 0, y: 0 })
  const [localCoords, setLocalCoords] = useState({ x: 0, y: 0 })
  const [localRect, setLocalRect] = useState({ x: 0, y: 0 })

  const handleMouseMove = (event) => {
    // 👇️ Get the mouse position relative to the element
    setLocalCoords({
      x: event.target.offsetLeft,
      y: event.target.offsetTop,
      // x: event.clientX - event.target.offsetLeft,
      // y: event.clientY - event.target.offsetTop,
    })
  }

  useEffect(() => {
    const handleWindowMouseMove = (event) => {
      setCoords({
        x: event.clientX,
        y: event.clientY,
      })

      let rect = event.target.getBoundingClientRect()
      setLocalRect({
        x: rect.left + (rect.right - rect.left) / 2,
        y: rect.top + (rect.bottom - rect.top) / 2,
      })
    }
    window.addEventListener("mousemove", handleWindowMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove)
    }
  }, [])

  const xdis = -coords.x + 500
  const ydis = -coords.y + 620
  // const xdis = -coords.x + 500
  // const ydis = -coords.y + 620
  const centerdis = Math.sqrt(xdis * xdis + ydis * ydis)

  const xdisrel = 3 * Math.cbrt(xdis)
  const ydisrel = 3 * Math.cbrt(ydis)
  const centerdisrel = Math.sqrt(xdisrel * xdisrel + ydisrel * ydisrel)

  const blur = (2 / 1) * Math.abs(Math.cbrt(centerdis)) + 1
  const spread = (4 / 1) * Math.abs(Math.cbrt(centerdis)) + 1
  const opacity = -0.00005 * (centerdis * centerdis) + 10
  const colorr = `rgba(0, 0, 0, 0.1)`
  const shadow =
    xdisrel + "px " + ydisrel + "px " + blur + "px " + spread + "px " + colorr

  return (
    <div
      onMouseMove={handleMouseMove}
      className="section-container relative">
      <section
        style={{
          backgroundColor: "lightblue",
          overflow: "hidden",
          height: "250px",
          width: "300px",
          borderRadius: spread,
          // opacity: opacity,
          boxShadow: shadow,
          //   boxShadow: "20px 10px 30px rgba(1,41,112,0.8)",
        }}>
        Global mouse position:{" "}
        <b>
          ({coords.x}, {coords.y})
        </b>
        <br />
        Local mouse position:{" "}
        <b>
          ({localCoords.x}, {localCoords.y})
        </b>
        <br />
        Center page at:{" "}
        <b>
          ({xdis}, {ydis})
        </b>
        <br />
        Calculated distance at:{" "}
        <b>
          ({Math.round(xdisrel)}, {Math.round(ydisrel)})
        </b>
        <br />
        Rect:{" "}
        <p className="w-[120px] h-[30px] bg-slate-200">
          ({Math.round(localRect.x)}, {Math.round(localRect.y)})
        </p>
        ({Math.round(localRect.x)}, {Math.round(localRect.y)})
        {/* <p>{testy}</p> */}
      </section>
    </div>
  )
}

export default MouseMove
