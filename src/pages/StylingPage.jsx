import React, { useState } from "react"

const StylingPage = () => {
  const [sampleText, setSampleText] = useState({
    h1: "Heading 1",
    h2: "Heading 2",
    h3: "Heading 3",
    copy: "This is paragraph text. Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit aliquid sit suscipit ex impedit quisquam officiis architecto vel quam omnis!",
  })
  const handleChange = (event) => {
    setSampleText({ ...sampleText, [event.target.name]: event.target.value })
  }

  return (
    <div className="h-[600px] p-5">
      <div className="flex">
        <div className="w-1/3 px-2 flex flex-col">
          <h1 className="heading1 w-fit p-4 my-2 rounded-lg">
            {sampleText.h1}
          </h1>
          <h2 className="heading2 w-fit p-4 my-2 rounded-lg">
            {sampleText.h2}
          </h2>
          <h3 className="heading3 w-fit p-4 my-2 rounded-lg">
            {sampleText.h3}
          </h3>
          <p className="text1 p-4 my-2 rounded-lg">{sampleText.copy}</p>
          <button className="button1">Button</button>
        </div>
        <div className="w-1/3 flex flex-col px-2">
          <h1 className="heading1 w-fit bg-primary p-4 my-2 rounded-lg">
            {sampleText.h1}
          </h1>
          <h2 className="heading2 w-fit bg-primary p-4 my-2 rounded-lg">
            {sampleText.h2}
          </h2>
          <h3 className="heading3 w-fit bg-primary p-4 my-2 rounded-lg">
            {sampleText.h3}
          </h3>
          <p className="text1 bg-primary p-4 my-2 rounded-lg">
            {sampleText.copy}
          </p>
          <button className="button1">Button</button>
        </div>
        <div className="w-1/3 flex flex-col px-2">
          <h1 className="heading1 w-fit bg-secondary text-text_dark p-4 my-2 rounded-lg">
            {sampleText.h1}
          </h1>
          <h2 className="heading2 w-fit bg-secondary text-text_dark p-4 my-2 rounded-lg">
            {sampleText.h2}
          </h2>
          <h3 className="heading3 w-fit bg-secondary text-text_dark p-4 my-2 rounded-lg">
            {sampleText.h3}
          </h3>
          <p className="text1 bg-secondary text-text_dark p-4 my-2 rounded-lg">
            {sampleText.copy}
          </p>
          <button className="button1 bg-secondary text-text_dark">
            Button
          </button>
        </div>
      </div>
      <div>
        <form className="flex justify-between">
          <div>
            <h3 className="heading3">Heading 1</h3>
            <input
              type="text"
              name="h1"
              onChange={handleChange}
              className="input1"
            />
          </div>
          <div>
            <h3 className="heading3">Heading 2</h3>
            <input
              type="text"
              name="h2"
              onChange={handleChange}
              className="input1"
            />
          </div>
          <div>
            <h3 className="heading3">Heading 3</h3>
            <input
              type="text"
              name="h3"
              onChange={handleChange}
              className="input1"
            />
          </div>
          <div>
            <h3 className="heading3">Body Copy</h3>
            <textarea
              type="text"
              name="copy"
              onChange={handleChange}
              rows="1"
              className="input1 whitespace-normal"
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default StylingPage
