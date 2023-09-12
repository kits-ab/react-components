import React from "react"

import { Social, SocialProps } from "./Social"
import * as types from "../../types"

export default {
  title: "Components/Social",
  component: Social
}

export const Default = (props: SocialProps) => (
  <Social
    {...props}
    info={{
      facebook: new types.Username("kokitotsos", types.SocialType.Facebook),
      github: new types.Username("kits-ab", types.SocialType.GitHub),
      keybase: new types.Username("kokitotsos", types.SocialType.Keybase),
      linkedin: new types.Username("kits-ab", types.SocialType.LinkedIn),
      microblog: new types.Username("kits-ab", types.SocialType.MicroBlog),
      twitter: new types.Username("kokitotsos", types.SocialType.Twitter)
    }}
  />
)
