import { Story } from "@storybook/react/types-6-0"
import React from "react"

import { DevelopmentIcon, spacing, ProjectIcon, SecurityIcon, IntegrationIcon } from "../.."
import { Offer, OfferProps, OfferType } from "./Offer"

export default {
  title: "Components/Offer",
  component: Offer,
  argTypes: {
    type: {
      control: {
        type: "select",
        options: [OfferType.Type1, OfferType.Type2, OfferType.Type3, OfferType.Type4]
      }
    }
  }
}

const Template: Story<OfferProps> = (args) => (
  <Offer icon={<DevelopmentIcon />} style={{ maxWidth: 600, padding: spacing.large }} {...args}>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.
    </p>
    <p>
      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
      mollit anim id est laborum.
    </p>
  </Offer>
)

export const Default = Template.bind({})
Default.args = {
  heading: "Lorem ipsum",
  type: OfferType.Type1
}

export const Type2 = Template.bind({})
Type2.args = {
  heading: "Lorem ipsum",
  type: OfferType.Type2,
  icon: <ProjectIcon />
}

export const Type3 = Template.bind({})
Type3.args = {
  heading: "Lorem ipsum",
  type: OfferType.Type3,
  icon: <IntegrationIcon />
}

export const Type4 = Template.bind({})
Type4.args = {
  heading: "Lorem ipsum",
  type: OfferType.Type4,
  icon: <SecurityIcon />
}
