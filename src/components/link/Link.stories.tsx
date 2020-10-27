import React from "react"

import { colors, Text } from "../.."
import { Link, LinkProps, LinkContext } from "./Link"

export default {
  title: "Components/Link",
  component: Link
}

export const Default = (props: LinkProps) => (
  <Text>
    <ul>
      <li>
        <Link {...props} to="#link">
          Link
        </Link>
      </li>
      <li>
        <Link to="#">Nav Link</Link>
      </li>
      <LinkContext.Provider
        value={{
          linkComponent: ({ to, children }) => (
            <a href={to as string} style={{ color: colors.accent2 }}>
              {children}
            </a>
          ),
          navLinkComponent: ({ to, children }) => (
            <a href={to as string} style={{ color: colors.accent3 }}>
              {children}
            </a>
          )
        }}
      >
        <li>
          <Link to="#">Link (accent 2)</Link>
        </li>
        <li>
          <Link to="#" isActive={() => false}>
            Nav Link (accent 3)
          </Link>
        </li>
      </LinkContext.Provider>
    </ul>
  </Text>
)
