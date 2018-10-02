import * as React from "react"
import styled, { css } from "styled-components"

import { colors, spacing } from "../../styles/constants"
import * as types from "../../types"
import { ContentHeading } from "../headings/content/ContentHeading"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Vertical } from "../layouts/vertical/Vertical"
import { Text } from "../text/Text"

export enum OfferType {
  Type1,
  Type2,
  Type3,
  Type4
}

const getBackgroundColor = (type: OfferType) => {
  switch (type) {
    case OfferType.Type1:
      return css`
        background-color: ${colors.primary};
        background-color: var(--primary);
      `
    case OfferType.Type2:
      return css`
        background-color: ${colors.accent1};
        background-color: var(--accent1);
      `
    case OfferType.Type3:
      return css`
        background-color: ${colors.accent2};
        background-color: var(--accent2);
      `
    case OfferType.Type4:
      return css`
        background-color: ${colors.accent3};
        background-color: var(--accent3);
      `
  }
}

const getClipPath = (type: OfferType) => {
  switch (type) {
    case OfferType.Type1:
      return css`
        clip-path: polygon(
          15px 25px,
          calc(100% - 25px) 0,
          calc(100% - 10px) calc(100% - 10px),
          0 calc(100% - 20px)
        );
      `
    case OfferType.Type2:
      return css`
        clip-path: polygon(
          20px 20px,
          calc(100% - 25px) 25px,
          calc(100% - 10px) calc(100% - 25px),
          0 100%
        );
      `
    case OfferType.Type3:
      return css`
        clip-path: polygon(
          25px 5px,
          calc(100% - 25px) 10px,
          100% calc(100% - 25px),
          0 calc(100% - 10px)
        );
      `
    case OfferType.Type4:
      return css`
        clip-path: polygon(0 0, 100% 15px, calc(100% - 25px) calc(100% - 25px), 25px 100%);
      `
  }
}

const getFillColor = (type: OfferType) => {
  switch (type) {
    case OfferType.Type1:
      return css`
        fill: ${colors.primary};
        fill: var(--primary);
      `
    case OfferType.Type2:
      return css`
        fill: ${colors.accent1};
        fill: var(--accent1);
      `
    case OfferType.Type3:
      return css`
        fill: ${colors.accent2};
        fill: var(--accent2);
      `
    case OfferType.Type4:
      return css`
        fill: ${colors.accent3};
        fill: var(--accent3);
      `
  }
}

type P = Partial<OfferProps>
const StyledDiv = styled.div`
  ${(props: P) => getBackgroundColor(props.type!)};
  color: white;
  display: block;
  height: calc(100% + 50px);
  margin: -25px;
  padding: 75px;
  position: relative;
  z-index: ${(props: P) => props.zIndex || ""};
  ${(props: P) => getClipPath(props.type!)};
`

const StyledIcon = styled.div`
  align-items: center;
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 50%;
  display: inline-flex;
  justify-content: center;
  max-height: 50px;
  max-width: 50px;
  min-height: 50px;
  min-width: 50px;

  > svg {
    ${(props: P) => getFillColor(props.type!)};
    height: 26px;
    width: 26px;
  }
`

const StyledHeading = styled(ContentHeading)`
  color: white;
`

const StyledText = styled(Text)`
  p {
    color: white;
  }
`

export interface OfferProps extends types.BaseProps {
  /** The content of the offer. */
  children?: React.ReactNode | string
  /** The heading of the offer. */
  heading: string
  /** An icon representing the offer. */
  icon: React.ReactNode
  /** The type determines the colors and shape of the offer. */
  type: OfferType
  /**
   * An offer extends outside its box and therefore it will overlap its surrounding so you'll
   * probably need to set the z-index.
   */
  zIndex?: number
}

/**
 * Offer is used to show information about an offer in a colorful box.
 */
export class Offer extends React.PureComponent<OfferProps> {
  render() {
    const { children, heading, icon, type, zIndex, ...restProps } = this.props
    return (
      <div {...restProps}>
        <StyledDiv type={type} zIndex={zIndex}>
          <Vertical spacing={spacing.medium}>
            <Horizontal alignVertical={types.Alignment.Center} spacing={spacing.medium}>
              <StyledIcon type={type}>{icon}</StyledIcon>
              <StyledHeading>{heading}</StyledHeading>
            </Horizontal>
            <StyledText>{children}</StyledText>
          </Vertical>
        </StyledDiv>
      </div>
    )
  }
}
