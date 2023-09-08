import { Story } from "@storybook/react"
import React, { useState } from "react"

import { Persona } from "./Persona"
import { Personas, PersonasProps } from "./Personas"
import { Text } from "../.."

export default {
  title: "Components/Personas",
  component: Personas,
  subcomponents: { Persona }
}

const Template: Story<PersonasProps> = (args) => {
  const [active, setActive] = useState(1)
  return (
    <Personas {...args}>
      <Persona
        iconSrc="/persona1.png"
        isActive={active === 1}
        onClick={() => setActive(1)}
        name="Lorem Ipsum 1"
      >
        <Text>
          <h3>Lorem Ipsum 1</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Text>
      </Persona>
      <Persona
        iconSrc="/persona2.png"
        isActive={active === 2}
        onClick={() => setActive(2)}
        name="Lorem Ipsum 2"
      >
        <Text>
          <h3>Lorem Ipsum 2</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Text>
      </Persona>
      <Persona
        iconSrc="/persona3.png"
        isActive={active === 3}
        onClick={() => setActive(3)}
        name="Lorem Ipsum 3"
      >
        <Text>
          <h3>Lorem Ipsum 3</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
            mollit anim id est laborum.
          </p>
        </Text>
      </Persona>
    </Personas>
  )
}

export const Default = Template.bind({})
