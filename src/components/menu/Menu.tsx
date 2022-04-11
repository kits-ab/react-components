import React, { useCallback, useEffect, useRef, useState } from "react"
import styled from "styled-components"

import { colors, fonts, spacing } from "../../styles/constants"
import * as types from "../../types"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Link } from "../link/Link"
import { MenuIcon } from "../menuicon/MenuIcon"

type P = Partial<
  MenuProps & {
    isFloating: boolean
    isOpen: boolean
  }
>

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
      color: var(--text2);
      display: ${(props: P) => (props.isFloating ? "none" : "inline-block")};
    }
  }

  .Menu-expanded {
    display: flex;

    > a {
      color: ${colors.text2};
      color: var(--text2);
      display: inline-block;
      padding: 0 ${spacing.mini}px ${spacing.medium}px;
      position: relative;
      text-decoration: none;
      transition: color 0.2s;
      white-space: nowrap;

      &::after {
        background-color: ${colors.primary};
        background-color: var(--primary);
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
        color: var(--text1);

        &::after {
          height: 3px;
          opacity: 1;
        }
      }
    }

    @media (max-width: ${(props: P) => props.breakpoint}px) {
      background-color: ${colors.background1};
      background-color: var(--background1);
      border: 1px solid ${colors.line};
      border: 1px solid var(--line);
      border-radius: 10px;
      box-shadow: 0 1px 3px 0 ${colors.lineShadow};
      box-shadow: 0 1px 3px 0 var(--lineShadow);
      display: ${(props: P) => (props.isOpen ? "flex" : "none")};
      height: auto;
      min-width: 200px;
      padding: 30px 0 20px;
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

export type MenuProps = types.BaseProps & {
  /**
   * The breakpoint at which the menu switches to collapsed.
   * @default 500
   */
  breakpoint?: number
  /** The links to show in the menu. */
  links: types.Link[]
}

/**
 * Menu shows a menu with all the provided links. The menu can be collapsed if the screen is smaller
 * than a breakpoint and will switch to floating mode on small screens.
 */
export const Menu = ({ breakpoint = 500, links, ...restProps }: MenuProps) => {
  const [isFloating, setIsFloating] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  const getProps = ({ isPartiallyCurrent }: { isPartiallyCurrent: boolean }) => {
    return isPartiallyCurrent ? { className: "is-active" } : null
  }

  const handleClick = () => {
    setIsOpen((previousIsOpen) => !previousIsOpen)
  }

  const handleDocumentClick = useCallback(
    (e: any) => {
      if (isOpen && !(menuRef.current as unknown as Element).contains(e.target)) {
        setIsOpen(false)
      }
    },
    [isOpen]
  )

  const handleScroll = () => {
    setIsFloating(window.scrollY > 60)
    setIsOpen(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("click", handleDocumentClick, false)
      document.addEventListener("touchend", handleDocumentClick, false)
    } else {
      document.removeEventListener("click", handleDocumentClick, false)
      document.removeEventListener("touchend", handleDocumentClick, false)
    }

    return () => {
      document.removeEventListener("click", handleDocumentClick, false)
      document.removeEventListener("touchend", handleDocumentClick, false)
    }
  }, [isOpen, handleDocumentClick])

  return (
    <StyledNav
      breakpoint={breakpoint}
      isFloating={isFloating}
      isOpen={isOpen}
      {...restProps}
      ref={menuRef}
    >
      <Horizontal breakpoint={breakpoint} className="Menu-expanded" spacing={spacing.small}>
        {links.map((link, index) => (
          <Link activeClassName="is-active" getProps={getProps} to={link.href} key={index}>
            {link.text}
          </Link>
        ))}
      </Horizontal>
      <Horizontal className="Menu-collapsed" onClick={handleClick}>
        <span>Meny</span>
        <MenuIcon
          floatingPosition={{ right: 20, top: 15 }}
          isFloating={isFloating}
          isOpen={isOpen}
        />
      </Horizontal>
    </StyledNav>
  )
}
