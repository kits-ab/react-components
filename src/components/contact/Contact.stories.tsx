import React from "react"

import { Contact, ContactProps } from "./Contact"
import * as types from "../../types"

export default {
  title: "Components/Contact",
  component: Contact
}

export const Default = (props: ContactProps) => (
  <Contact
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
    type={types.ContactType.Company}
  />
)

export const WithRoleInformation = (props: ContactProps) => (
  <Contact
    {...props}
    info={{
      name: "Lorem Ipsum",
      role: "VD",
      phone: new types.PhoneNumber("0708-123456"),
      email: new types.Email("lorem.ipsum@kits.se")
    }}
    type={types.ContactType.Role}
  />
)

export const WithPersonInformation = (props: ContactProps) => (
  <Contact
    {...props}
    info={{
      name: "Lorem Ipsum",
      phone: new types.PhoneNumber("0708-123456"),
      email: new types.Email("info@kits.se"),
      social: {
        facebook: new types.Username("kokitotsos", types.SocialType.Facebook),
        github: new types.Username("kits-ab", types.SocialType.GitHub),
        linkedin: new types.Username("kits-ab", types.SocialType.LinkedIn),
        keybase: new types.Username("kokitotsos", types.SocialType.Keybase),
        microblog: new types.Username("kokitotsos", types.SocialType.MicroBlog),
        twitter: new types.Username("kokitotsos", types.SocialType.Twitter)
      }
    }}
    type={types.ContactType.Person}
  />
)
