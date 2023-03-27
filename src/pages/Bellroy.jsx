import React from "react"

const Bellroy = () => {
  return (
    <div className="bg-white">
      <div
        id="nav"
        className="flex justify-between items-center">
        <p className="md:hidden">Burger</p>
        <div className="hidden md:flex gap-4 items-center">
          <h2 className="heading2">Logo</h2>
          <a href="#">Bags</a>
          <a href="#">Wallets</a>
          <a href="#">Accessories</a>
          <a href="#">Tech</a>
          <a href="#">Travel</a>
          <a href="#">Collections</a>
        </div>
        <h2 className="heading2 md:hidden">Logo</h2>
        <div className="flex gap-4">
          <a href="#">Help</a>
          <a href="#">Find in store</a>
          <svg
            width="20px"
            height="20px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#ffffff"
            strokeWidth="1.2"
            transform="rotate(0)">
            <g>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
                fill="#212121"></path>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}

export default Bellroy
