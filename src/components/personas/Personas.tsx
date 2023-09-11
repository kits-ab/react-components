import React from "react"
import { styled, css } from "styled-components"

import { colors, easings, spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { Breakout } from "../breakout/Breakout"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Wrapper } from "../layouts/wrapper/Wrapper"

type P = PersonasProps & { nrOfPersonas: number; selectedIndex: number }

const getLeftPositions = (nrOfPersonas: number) => {
  const positions = []
  for (let i = 0; i < nrOfPersonas; i++) {
    positions.push(css`
      > *:nth-child(${i + 1}) {
        .Persona-title {
          left: ${(i * 100) / nrOfPersonas / nrOfPersonas}%;
        }
      }
    `)
  }
  return positions
}

const StyledWrapper = styled("div").withConfig({
  shouldForwardProp: (prop) => !["nrOfPersonas", "selectedIndex"].includes(prop)
})<P>`
  figure {
    margin: 0;
  }

  img[src$=".gif"] {
    display: none;
  }

  .Personas-breakout {
    background-color: ${colors.background2};
    background-color: var(--background2);
    padding-bottom: ${spacing.huge}px;
    padding-top: ${spacing.huge}px;
  }

  @media (min-width: ${width.mobileMenu}px) {
    padding-top: 180px;
    position: relative;

    .Personas-wrapper {
      position: relative;
      width: ${(props: P) => props.nrOfPersonas * 100}%;

      &::after {
        border: 30px solid transparent;
        border-bottom-color: ${colors.background2};
        border-bottom-color: var(--background2);
        border-top: 0;
        content: "";
        height: 0;
        margin-left: -30px;
        position: absolute;
        left: ${(props: P) =>
          (props.selectedIndex * 100) / props.nrOfPersonas / props.nrOfPersonas +
          100 / props.nrOfPersonas / props.nrOfPersonas / 2}%;
        top: -80px;
        transition: left 0.3s ${easings.easeOut};
        width: 0;
      }

      ${(props) => getLeftPositions(props.nrOfPersonas)};
    }

    .Persona-content {
      opacity: 0;
      transition: all 0.3s ${easings.easeOut};
      transform: translateX(${(props: P) => props.selectedIndex * -100}%);

      h3 {
        margin-top: 0;
      }
    }

    .Persona-title {
      cursor: pointer;
      position: absolute;
      top: -220px;
      width: ${(props: P) => 100 / props.nrOfPersonas / props.nrOfPersonas}%;

      > h4 {
        font-size: 14px;
      }

      > img {
        height: 100px;
        margin-bottom: ${spacing.small}px;
        transform: scale(0.9);
        transform-origin: bottom center;
        transition: transform 0.2s;
      }

      &:hover {
        > img {
          transform: scale(1.07);
          transition: transform 0.2s;
        }
      }
    }

    .Persona.is-active {
      .Persona-content {
        opacity: 1;
      }

      .Persona-title,
      .Persona-title:hover {
        img {
          transform: scale(1.1);
        }
      }
    }
  }

  @media (min-width: ${width.tablet}px) {
    .Persona-title {
      > h4 {
        font-size: 16px;
      }

      > img {
        transform: scale(1);
      }
    }
  }

  @media (max-width: ${width.mobileMenu}px) {
    .Personas-breakout {
      padding-bottom: ${spacing.large}px;
      padding-top: ${spacing.large}px;
    }

    .Persona-title {
      > h4 {
        color: ${colors.link};
        color: var(--link);
        font-size: 26px;
      }

      > img {
        display: none;
      }
    }

    .Persona + .Persona {
      border-top: 1px solid ${colors.line};
      margin-top: ${spacing.large}px;
      padding-top: ${spacing.large}px;
    }
  }
`

export type PersonasProps = types.BaseProps & {
  /** The content of the persona (should be a list of `<Persona>`). */
  children: React.ReactNode
}

/**
 * Personas is used to show a list of personas with a description of the persona.
 */
export const Personas = ({ children, ...restProps }: PersonasProps) => {
  const findSelectedIndex = () => {
    const childrenArray = React.Children.toArray(children)
    for (let index = 0; index < childrenArray.length; index++) {
      const c = childrenArray[index]
      // tslint:disable-next-line
      if (React.isValidElement(c) && c.props["isActive"]) {
        return index
      }
    }
    return 0
  }

  return (
    <StyledWrapper
      {...restProps}
      nrOfPersonas={React.Children.count(children)}
      selectedIndex={findSelectedIndex()}
    >
      <Breakout className="Personas-breakout">
        <Wrapper>
          <Horizontal breakpoint={width.mobileMenu} className="Personas-wrapper" distribute={true}>
            {children}
          </Horizontal>
        </Wrapper>
      </Breakout>
    </StyledWrapper>
  )
}
