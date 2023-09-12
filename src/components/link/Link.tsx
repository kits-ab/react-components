import React from "react"

import * as types from "../../types"

export type LinkProps = types.BaseProps & {
  /**
   * The class to give the link when it's active.
   * @default is-active
   */
  activeClassName?: string
  /** The styles to apply to the link when it's' active. */
  activeStyle?: object
  /** The content of the link. */
  children: React.ReactNode
  /**
   * ** * ** Set to `true` to only apply the active class/style if the location is matched exactly.
   * @default false
   */
  exact?: boolean
  /**
   * ** * ** Calls up to you to get props for the underlying anchor element. Useful for styling
   * the anchor as active.
   */
  getProps?: (obj: {
    isCurrent: boolean
    isPartiallyCurrent: boolean
    href: string
    location: types.Location
  }) => object | null
  /**
   * A function to add extra logic for determining whether the link is active. This should also be
   * used when no `LinkContext.Provider` is present to determine if the link should be active or not.
   */
  isActive?: (() => boolean) | ((match: any, location: Location) => boolean)
  /**
   * ** * ** Normally the active state of the link is determined by comparing location to the
   * current browser url. To compare to a different location, a location can be passed.
   */
  location?: types.Location
  /**
   * ** * ** Set to `true` to replace the current entry in the history stack instead of adding a new
   * one when clicking the link.
   * @default false
   */
  replace?: boolean
  /**
   * ** * ** Set to `true` to take the trailing slash of a location's pathname into consideration when
   * determining if the location matches the current url.
   * @default false
   */
  strict?: boolean
  /**
   * A string representation of the location to link to or an object containing the individual
   * parts of the url.
   */
  to: string | types.Location
}

export type LinkContextProps = {
  /** The component to use to create links. */
  linkComponent?: React.ComponentType<LinkProps>
  /** The component to use to create nav links (links with special styling for active link). */
  navLinkComponent?: React.ComponentType<LinkProps>
}

export const LinkContext = React.createContext<LinkContextProps>({})

/**
 * Link is used to create links. Out of the box it will render a normal `<a>` tag but when the
 * component of this project is used inside a Reach Router, React Router or Gatsby context you
 * probably want to use `Link`, `NavLink` or `GatsbyLink` instead and `LinkContext` gives you the
 * ability to do so. See example for details.
 *
 * Props marked with ** * ** is only available in a LinkContext with React Router, React Router or
 * Gatsby Link (not every prop is available in all libraries). See the documentation for each
 * library to understand how it works.
 */
export const Link = (props: LinkProps) => {
  const navLinkProps = [
    "activeClassName",
    "activeStyle",
    "exact",
    "getProps",
    "isActive",
    "location",
    "strict"
  ]

  const createHref = (location: types.Location) => {
    const { pathname, search, hash } = location
    let path = pathname || "/"
    if (search && search !== "?") {
      path += search.charAt(0) === "?" ? search : `?${search}`
    }
    if (hash && hash !== "#") {
      path += hash.charAt(0) === "#" ? hash : `#${hash}`
    }
    return path
  }

  const getClassName = () => {
    const { activeClassName = "is-active", isActive, className } = props
    if (isActive && (isActive as any)()) {
      if (className) {
        return `${activeClassName} ${className}`
      } else {
        return activeClassName
      }
    } else {
      return className
    }
  }

  const getStyle = () => {
    const { activeStyle, isActive, style } = props
    if (isActive && (isActive as any)()) {
      return { ...style, ...activeStyle }
    } else {
      return style
    }
  }

  const {
    activeClassName = "is-active",
    children,
    className,
    style,
    to,
    getProps,
    ...restProps
  } = props

  return (
    <LinkContext.Consumer>
      {({ linkComponent: LinkComponent, navLinkComponent: NavLinkComponent }) => {
        if (
          NavLinkComponent &&
          navLinkProps.some((propName) => (props as any)[propName] !== undefined)
        ) {
          return (
            <NavLinkComponent
              activeClassName={activeClassName}
              className={className}
              style={style}
              to={to}
              getProps={getProps}
              {...restProps}
            >
              {children}
            </NavLinkComponent>
          )
        } else if (LinkComponent) {
          return (
            <LinkComponent
              className={className}
              to={to}
              style={style}
              getProps={getProps}
              {...restProps}
            >
              {children}
            </LinkComponent>
          )
        } else {
          const href = typeof to === "string" ? to : createHref(to)
          return (
            <a className={getClassName()} href={href} style={getStyle()} {...restProps}>
              {children}
            </a>
          )
        }
      }}
    </LinkContext.Consumer>
  )
}
