import React from "react"
import vite from "/vite.svg"

const Footer1 = () => {
  return (
    <footer>
      <div className="w-full container mx-auto p-4 md:px-6 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between gap-10">
          <a
            href="#"
            className="flex items-center mb-4 sm:mb-0">
            <img
              src={vite}
              className="h-8 mr-3"
              alt="Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              InQ Dev
            </span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="#"
                className="mr-4 hover:underline md:mr-6 ">
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 hover:underline md:mr-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a
                href="#"
                className="mr-4 hover:underline md:mr-6 ">
                Licensing
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          ©{" "}
          <a
            href="#"
            className="hover:underline">
            InQ Dev™
          </a>
          . Most Rights Reserved.
        </span>
      </div>
    </footer>
  )
}

export default Footer1
