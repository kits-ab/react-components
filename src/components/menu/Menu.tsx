import * as React from "react"
import * as ReactDOM from "react-dom"
import styled from "styled-components"

import { colors, fonts, spacing } from "../../styles/constants"
import * as types from "../../types"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Link } from "../link/Link"
import { MenuIcon } from "../menuicon/MenuIcon"

type P = Partial<MenuProps & MenuState>

const StyledNav = styled.nav`
  display: inline-block;
  font-family: ${fonts.light};
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  position: relative;

  .Menu-collapsed {
    align-items: center;
    cursor: pointer;
    display: none;
    margin-bottom: ${spacing.medium - 11}px;
    margin-right: -10px;
    user-select: none;

    @media (max-width: ${(props: P) => props.breakpoint}px) {
      display: flex;
    }

    > span {
      color: ${colors.text2};
      display: ${(props: P) => (props.isFloating ? "none" : "inline-block")};
    }
  }

  .Menu-expanded {
    display: flex;

    > a {
      color: ${colors.text2};
      display: inline-block;
      padding: 0 ${spacing.mini}px ${spacing.medium}px;
      position: relative;
      text-decoration: none;
      transition: color 0.2s;
      white-space: nowrap;

      &::after {
        background-color: ${colors.primary};
        border-radius: 1px;
        bottom: -2px;
        content: "";
        height: 0;
        left: 0;
        opacity: 0;
        position: absolute;
        right: 0;
        transition: all 0.2s;
      }

      &.is-active,
      &:focus,
      &:hover {
        color: ${colors.text1};

        &::after {
          height: 3px;
          opacity: 1;
        }
      }
    }

    @media (max-width: ${(props: P) => props.breakpoint}px) {
      background-color: white;
      border: 1px solid ${colors.line};
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1);
      display: ${(props: P) => (props.isOpen ? "flex" : "none")};
      height: auto;
      min-width: 200px;
      padding: 30px 0 20px 0;
      position: ${(props: P) => (props.isFloating ? "fixed" : "absolute")};
      right: ${(props: P) => (props.isFloating ? "20px" : "-10px")};
      top: ${(props: P) => (props.isFloating ? "10px" : 0)};
      z-index: 110;

      > a {
        display: block;
        padding: 5px 20px;

        &::after {
          bottom: 0;
          left: -2px;
          top: 0;
          width: 0;
        }

        &.is-active,
        &:focus,
        &:hover {
          &::after {
            height: auto;
            width: 3px;
          }
        }
      }
    }
  }
`

export interface MenuProps extends types.BaseProps {
  /**
   * The breakpoint at which the menu switches to collapsed.
   * @default 500
   */
  breakpoint?: number
  /** The links to show in the menu. */
  links: types.Link[]
}

interface MenuState {
  isFloating: boolean
  isOpen: boolean
}

/**
 * Menu shows a menu with all the provided links. The menu can be collapsed if the screen is smaller
 * than a breakpoint and will switch to floating mode on small screens.
 */
export class Menu extends React.PureComponent<MenuProps, MenuState> {
  state = { isFloating: false, isOpen: false }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll)
    document.removeEventListener("click", this.handleDocumentClick, false)
    document.removeEventListener("touchend", this.handleDocumentClick, false)
  }

  componentDidUpdate() {
    if (this.state.isOpen) {
      document.addEventListener("click", this.handleDocumentClick, false)
      document.addEventListener("touchend", this.handleDocumentClick, false)
    } else {
      document.removeEventListener("click", this.handleDocumentClick, false)
      document.removeEventListener("touchend", this.handleDocumentClick, false)
    }
  }

  render() {
    const { breakpoint = 500, links, ...restProps } = this.props
    return (
      <StyledNav
        breakpoint={breakpoint}
        isFloating={this.state.isFloating}
        isOpen={this.state.isOpen}
        {...restProps}
      >
        <Horizontal breakpoint={breakpoint} className="Menu-expanded" spacing={spacing.small}>
          {links.map((link, index) => (
            <Link activeClassName="is-active" to={link.href} key={index}>
              {link.text}
            </Link>
          ))}
        </Horizontal>
        <Horizontal className="Menu-collapsed" onClick={this.handleClick}>
          <span>Meny</span>
          <MenuIcon
            floatingPosition={{ right: 20, top: 15 }}
            isFloating={this.state.isFloating}
            isOpen={this.state.isOpen}
          />
        </Horizontal>
      </StyledNav>
    )
  }

  private handleClick = () => {
    this.setState((previousState: MenuState) => ({ isOpen: !previousState.isOpen }))
  }

  private handleDocumentClick = (e: any) => {
    if (this.state.isOpen && !(ReactDOM.findDOMNode(this) as Element).contains(e.target)) {
      this.setState({ isOpen: false })
    }
  }

  private handleScroll = () => {
    this.setState({ isFloating: window.scrollY > 60, isOpen: false })
  }
}
