import { Accordion } from "flowbite-react"
import React from "react"

const AccordionCustomTheme = {
  title: {
    arrow: {
      base: "h-20 w-20 shrink-0",
      open: {
        off: "",
        on: "rotate-180",
      },
    },
  },
}

const Accordian = () => {
  return (
    <div className="flex justify-center items-center p-10 border-2 m-5">
      <Accordion
        theme={AccordionCustomTheme}
        alwaysOpen={true}
        className="w-[500px]">
        <Accordion.Panel>
          <Accordion.Title>Title 1</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              culpa beatae incidunt officiis laborum ab sit similique harum rem
              consequuntur?
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
              culpa beatae incidunt officiis laborum ab sit similique harum rem
              consequuntur?
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Title 2</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              fuga quam repellat repellendus quia sed sapiente incidunt
              perferendis, magnam numquam iure ipsa accusantium eveniet aliquid
              alias. Asperiores optio unde eos?
            </p>
            <p className="text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio,
              iusto.
            </p>
          </Accordion.Content>
        </Accordion.Panel>
        <Accordion.Panel>
          <Accordion.Title>Title 3</Accordion.Title>
          <Accordion.Content>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Necessitatibus, ea?
            </p>
            <p className="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul className="list-disc pl-5 text-gray-500 dark:text-gray-400">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500">
                  Sample
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:underline dark:text-blue-500">
                  Sample
                </a>
              </li>
            </ul>
          </Accordion.Content>
        </Accordion.Panel>
      </Accordion>
    </div>
  )
}

export default Accordian
