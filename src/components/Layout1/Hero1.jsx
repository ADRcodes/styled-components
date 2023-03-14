import React from "react"
import pic from "/vite.svg"

const Hero1 = () => {
  return (
    <div className="flex justify-around items-center p-10">
      <div>
        <div>
          <img
            className="h-[300px]"
            src={pic}
            alt="hero image"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="w-[400px]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iste harum
          fugit rem consequatur nemo fuga velit a suscipit eveniet rerum? Alias
          vel at necessitatibus tempora unde libero, molestias aut architecto
          cumque, sunt reprehenderit similique praesentium, soluta culpa nobis
          accusamus ad enim officia magnam sequi ducimus possimus? Minus ipsa
          ipsam cumque.
        </p>
        <button className="button1">Click</button>
      </div>
    </div>
  )
}

export default Hero1
