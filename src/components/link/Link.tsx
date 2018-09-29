import * as React from "react"

import * as types from "../../types"

export interface LinkProps extends types.BaseProps {
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

export interface LinkContextProps {
  /** The component to use to create links. */
  linkComponent?: React.ComponentType<LinkProps>
  /** The component to use to create nav links (links with special styling for active link). */
  navLinkComponent?: React.ComponentType<LinkProps>
}

export const LinkContext = React.createContext<LinkContextProps>({})

/**
 * Link is used to create links. Out of the box it will render a normal `<a>` tag but when the
 * component of this project is used inside a React Router or Gatsby context you probably want to
 * use `Link`, `NavLink` or `GatsbyLink` instead and `LinkContext` gives you the ability to do so.
 * See example for details.
 *
 * Props marked with ** * ** is only available in a LinkContext with React Router or Gatsby Link,
 * see https://reacttraining.com/react-router/web/api/Link.
 */
export class Link extends React.PureComponent<LinkProps> {
  private static navLinkProps = [
    "activeClassName",
    "activeStyle",
    "exact",
    "isActive",
    "location",
    "strict"
  ]

  render() {
    const {
      activeClassName = "is-active",
      children,
      className,
      style,
      to,
      ...restProps
    } = this.props
    return (
      <LinkContext.Consumer>
        {({ linkComponent: LinkComponent, navLinkComponent: NavLinkComponent }) => {
          if (
            NavLinkComponent &&
            Link.navLinkProps.some(propName => (this.props as any)[propName] !== undefined)
          ) {
            return (
              <NavLinkComponent
                activeClassName={activeClassName}
                className={className}
                style={style}
                to={to}
                {...restProps}
              >
                {children}
              </NavLinkComponent>
            )
          } else if (LinkComponent) {
            return (
              <LinkComponent className={className} to={to} style={style} {...restProps}>
                {children}
              </LinkComponent>
            )
          } else {
            const href = typeof to === "string" ? to : this.createHref(to)
            return (
              <a className={this.getClassName()} href={href} style={this.getStyle()} {...restProps}>
                {children}
              </a>
            )
          }
        }}
      </LinkContext.Consumer>
    )
  }

  private createHref = (location: types.Location) => {
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

  private getClassName = () => {
    const { activeClassName = "is-active", isActive, className } = this.props
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

  private getStyle = () => {
    const { activeStyle, isActive, style } = this.props
    if (isActive && (isActive as any)()) {
      return { ...style, ...activeStyle }
    } else {
      return style
    }
  }
}
