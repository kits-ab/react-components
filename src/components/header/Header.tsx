import React from "react"
import { styled } from "styled-components"

import { colors, width } from "../../styles/constants"
import * as types from "../../types"
import { cssVar } from "../../utils/cssUtils"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Wrapper } from "../layouts/wrapper/Wrapper"
import { Link } from "../link/Link"
import { Logotype } from "../logotype/Logotype"
import { Menu } from "../menu/Menu"

const StyledHeader = styled.header`
  background-color: ${colors.background4};
  background-color: var(--background4);
  box-shadow: 0 1px 3px 0 ${colors.lineShadow};
  box-shadow: 0 1px 3px 0 var(--lineShadow);
  left: 0;
  position: fixed;
  right: 0;
  z-index: 10;
  width: 100%;

  @media (max-width: ${width.mobileMenu}px) {
    position: absolute;
  }

  @media (max-height: 400px) {
    position: absolute;
  }
`

const StyledHorizontal = styled(Horizontal)`
  height: 60px;
`

const StyledLogotypeWrapper = styled.div`
  flex: 1 0 auto;
  height: 100%;
  position: relative;

  > a {
    bottom: -18px;
    display: inline-block;
    position: relative;

    > svg {
      position: relative;
      z-index: 12;
    }

    &::before {
      background-color: ${colors.background1};
      background-color: var(--background1);
      bottom: 22px;
      content: "";
      height: 4px;
      left: -10px;
      opacity: 1;
      position: absolute;
      right: -10px;
      z-index: 11;
    }
  }
`

export type HeaderProps = types.BaseProps & {
  /**
   * The breakpoint at which the menu switches to collapsed.
   * @default 500
   */
  breakpoint?: number
  /** The links to show in the menu. */
  links: types.Link[]
}

/**
 * Header is used to show and header with a logotype and menu.
 */
export const Header = ({ links, breakpoint, ...restProps }: HeaderProps) => {
  return (
    <StyledHeader {...restProps}>
      <Wrapper>
        <StyledHorizontal alignVertical={types.Alignment.End}>
          <StyledLogotypeWrapper>
            <Link to="/">
              <Logotype color={cssVar("--text1") || colors.text1} width={80} />
            </Link>
          </StyledLogotypeWrapper>
          <Menu breakpoint={breakpoint} links={links} />
        </StyledHorizontal>
      </Wrapper>
    </StyledHeader>
  )
}
