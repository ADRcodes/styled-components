import React from "react"
import pic from "/vite.svg"

const TwoCardsWLrgImg = () => {
  return (
    <div className="section-container flex flex-col md:flex-row gap-10 justify-center">
      <div className="flex flex-col gap-5">
        <div className="flex gap-5 ">
          <img
            className="bg-red-200 h-[150px]"
            src={pic}
            alt="hero image"
          />
          <div className="flex flex-col">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              harum fugit rem consequatur nemo fuga velit a suscipit eveniet
            </p>
            <button className="button1">Click</button>
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col">
            <p className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste
              harum fugit rem consequatur nemo fuga velit a suscipit eveniet
              rerum?
            </p>
            <button className="button1">Click</button>
          </div>
          <img
            className="bg-red-200 h-[150px]"
            src={pic}
            alt="hero image"
          />
        </div>
      </div>
      <div>
        {/* <img
          className="bg-red-200 h-[350px]"
          src={pic}
          alt="hero image"
        /> */}
        <iframe
          src="https://player.vimeo.com/video/312278488?h=bc370b44e2"
          width="400"
          height="300"
          allow="autoplay; fullscreen; picture-in-picture"></iframe>
        <div className="flex justify-between items-center">
          <p>Lorem ipsum dolor sit amet?</p>
          <button className="button1">Click</button>
        </div>
      </div>
    </div>
  )
}

export default TwoCardsWLrgImg
