import React from "react"

import { Footer, FooterProps } from "./Footer"
import * as types from "../../types"

export default {
  title: "Components/Footer",
  component: Footer
}

export const Default = (props: FooterProps) => (
  <Footer
    {...props}
    info={{
      name: "KITS AB",
      street: "Norra Allégatan 8",
      postalCode: new types.PostalCode("413 01"),
      city: "Göteborg",
      phone: new types.PhoneNumber("0708-123456"),
      email: new types.Email("info@kits.se"),
      social: {
        facebook: new types.Username("kokitotsos", types.SocialType.Facebook),
        github: new types.Username("kits-ab", types.SocialType.GitHub),
        linkedin: new types.Username("kits-ab", types.SocialType.LinkedIn),
        twitter: new types.Username("kokitotsos", types.SocialType.Twitter)
      }
    }}
  />
)
