import React from "react"
import logo from "/vite.svg"
import airnbnblogo from "../assets/airbnb.svg"

const Airbnb = () => {
  return (
    <div className="m-10 pb-10 border-2 border-slate-200 rounded-xl shadow-lg">
      <div
        id="nav"
        className="flex items-center justify-between p-4">
        <div className="flex p-4 h-[70px] sm:w-[70px] lg:w-[160px] md:overflow-hidden md:object-fill">
          <img
            className="object-cover object-left"
            //   height="30"
            //   width="100"
            src={airnbnblogo}
            alt=""
          />
        </div>
        <div className="flex border-[1px] border-[#dddddd] dark:border-slate-500 h-[48px] shadow-sm hover:shadow-lg transition-shadow items-center rounded-full px-2">
          <a
            className="px-4 font-semibold"
            href="#">
            Anywhere
          </a>
          <a
            className="px-4 font-semibold border-x-[1px] whitespace-nowrap"
            href="">
            Any week
          </a>
          <a
            className="px-4 font-light whitespace-nowrap"
            href="">
            Add Guests
          </a>
          <div className="rounded-full bg-red-400 w-10 h-10 flex justify-center items-center">
            <svg
              width="20px"
              height="20px"
              viewBox="-2.4 -2.4 28.80 28.80"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
              stroke-width="1.2"
              transform="rotate(0)">
              <g>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M4 11C4 7.13401 7.13401 4 11 4C14.866 4 18 7.13401 18 11C18 14.866 14.866 18 11 18C7.13401 18 4 14.866 4 11ZM11 2C6.02944 2 2 6.02944 2 11C2 15.9706 6.02944 20 11 20C13.125 20 15.078 19.2635 16.6177 18.0319L20.2929 21.7071C20.6834 22.0976 21.3166 22.0976 21.7071 21.7071C22.0976 21.3166 22.0976 20.6834 21.7071 20.2929L18.0319 16.6177C19.2635 15.078 20 13.125 20 11C20 6.02944 15.9706 2 11 2Z"
                  fill="#ffffff"></path>
              </g>
            </svg>
          </div>
        </div>
        <div className="flex items-center px-3">
          <p className="px-2 whitespace-nowrap font-semibold">
            Airbnb your home
          </p>
          <svg
            viewBox="0 0 16 16"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            className="fill-black m-4"
            height="16"
            width="16">
            <path d="m8.002.25a7.77 7.77 0 0 1 7.748 7.776 7.75 7.75 0 0 1 -7.521 7.72l-.246.004a7.75 7.75 0 0 1 -7.73-7.513l-.003-.245a7.75 7.75 0 0 1 7.752-7.742zm1.949 8.5h-3.903c.155 2.897 1.176 5.343 1.886 5.493l.068.007c.68-.002 1.72-2.365 1.932-5.23zm4.255 0h-2.752c-.091 1.96-.53 3.783-1.188 5.076a6.257 6.257 0 0 0 3.905-4.829zm-9.661 0h-2.75a6.257 6.257 0 0 0 3.934 5.075c-.615-1.208-1.036-2.875-1.162-4.686l-.022-.39zm1.188-6.576-.115.046a6.257 6.257 0 0 0 -3.823 5.03h2.75c.085-1.83.471-3.54 1.059-4.81zm2.262-.424c-.702.002-1.784 2.512-1.947 5.5h3.904c-.156-2.903-1.178-5.343-1.892-5.494l-.065-.007zm2.28.432.023.05c.643 1.288 1.069 3.084 1.157 5.018h2.748a6.275 6.275 0 0 0 -3.929-5.068z"></path>
          </svg>
          <div className="flex items-center p-2 border-[1px] dark:border-neutral-500 rounded-full">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              height="28px"
              xmlns="http://www.w3.org/2000/svg">
              <g id="SVGRepo_iconCarrier">
                <path
                  d="M19 12.75H5C4.80109 12.75 4.61032 12.671 4.46967 12.5303C4.32902 12.3897 4.25 12.1989 4.25 12C4.25 11.8011 4.32902 11.6103 4.46967 11.4697C4.61032 11.329 4.80109 11.25 5 11.25H19C19.1989 11.25 19.3897 11.329 19.5303 11.4697C19.671 11.6103 19.75 11.8011 19.75 12C19.75 12.1989 19.671 12.3897 19.5303 12.5303C19.3897 12.671 19.1989 12.75 19 12.75Z"
                  fill="#000000"></path>
                <path
                  d="M19 8.25H5C4.80109 8.25 4.61032 8.17098 4.46967 8.03033C4.32902 7.88968 4.25 7.69891 4.25 7.5C4.25 7.30109 4.32902 7.11032 4.46967 6.96967C4.61032 6.82902 4.80109 6.75 5 6.75H19C19.1989 6.75 19.3897 6.82902 19.5303 6.96967C19.671 7.11032 19.75 7.30109 19.75 7.5C19.75 7.69891 19.671 7.88968 19.5303 8.03033C19.3897 8.17098 19.1989 8.25 19 8.25Z"
                  fill="#000000"></path>
                <path
                  d="M19 17.25H5C4.80109 17.25 4.61032 17.171 4.46967 17.0303C4.32902 16.8897 4.25 16.6989 4.25 16.5C4.25 16.3011 4.32902 16.1103 4.46967 15.9697C4.61032 15.829 4.80109 15.75 5 15.75H19C19.1989 15.75 19.3897 15.829 19.5303 15.9697C19.671 16.1103 19.75 16.3011 19.75 16.5C19.75 16.6989 19.671 16.8897 19.5303 17.0303C19.3897 17.171 19.1989 17.25 19 17.25Z"
                  fill="#000000"></path>
              </g>
            </svg>
            <svg
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              className="fill-black dark:fill-red-400 ml-1"
              height="32"
              width="32">
              <path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="flex">
        <div className="flex flex-col justify-center items-center mx-6 border-b-2 border-neutral-800 dark:border-neutral-100 ">
          <img
            className="dark:invert"
            src="https://a0.muscache.com/pictures/c5a4f6fc-c92c-4ae8-87dd-57f1ff1b89a6.jpg"
            alt=""
            width="24"
            height="24"
          />
          <p className="pt-1 font-medium text-sm">OMG!</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            src="https://a0.muscache.com/pictures/732edad8-3ae0-49a8-a451-29a8010dcc0c.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Cabins</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            src="https://a0.muscache.com/pictures/3b1eb541-46d9-4bef-abc4-c37d77e3c21b.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Amazing views</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            src="https://a0.muscache.com/pictures/5ed8f7c7-2e1f-43a8-9a39-4edfc81a3325.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Bed & breakfast</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            class="i1wps9q8 dir dir-ltr"
            src="https://a0.muscache.com/pictures/35919456-df89-4024-ad50-5fcb7a472df9.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Tiny homes</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            src="https://a0.muscache.com/pictures/0ff9740e-52a2-4cd5-ae5a-94e1bfb560d6.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Containers</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            class="i1wps9q8 dir dir-ltr"
            src="https://a0.muscache.com/pictures/78ba8486-6ba6-4a43-a56d-f556189193da.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Mansions</p>
        </div>
        <div className="flex flex-col justify-center items-center mx-6 py-2 border-b-2 hover:border-opacity-100 border-opacity-0 border-neutral-300 opacity-40 dark:opacity-80 hover:opacity-100 transition-all">
          <img
            className="dark:invert"
            class="i1wps9q8 dir dir-ltr"
            src="https://a0.muscache.com/pictures/c8e2ed05-c666-47b6-99fc-4cb6edcde6b4.jpg"
            alt=""
            width="24"
            height="24"></img>
          <p className="pt-1 font-medium text-xs">Luxe</p>
        </div>
      </div>
    </div>
  )
}

export default Airbnb
