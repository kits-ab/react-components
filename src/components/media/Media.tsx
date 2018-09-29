import * as React from "react"
import styled from "styled-components"

import { colors, spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { SubHeading } from "../headings/sub/SubHeading"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Vertical } from "../layouts/vertical/Vertical"
import { Text } from "../text/Text"

export interface MediaProps extends types.BaseProps {
  /** The content to show in the text block. */
  children: React.ReactNode | string
  /** The heading to show above the text block. */
  heading?: string
  /** A url to link to. The link will be shown below the content. */
  href?: string
  /** The source of the image to show. */
  src: string
  /** The source set of the image to show. */
  srcSet?: string
}

const StyledImageWrapper = styled.div`
  min-width: 300px;

  @media (max-width: ${width.tablet}px) {
    min-width: 200px;
  }

  @media (max-width: ${width.mobileMenu}px) {
    min-width: auto;
    width: 100%;
  }

  > img {
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
    border: 5px solid ${colors.border};
    max-width: 100%;

    @media (max-width: ${width.mobileMenu}px) {
      left: 50%;
      margin-left: -50vw;
      margin-right: -50vw;
      max-width: none;
      position: relative;
      right: 50%;
      width: 100vw;
    }
  }
`

/**
 * Media is used to show an image next to a text block.
 */
export class Media extends React.PureComponent<MediaProps> {
  render() {
    const { children, heading, href, src, srcSet, ...restProps } = this.props
    return (
      <Horizontal
        alignVertical={types.Alignment.Start}
        breakpoint={width.mobileMenu}
        spacing={spacing.large}
        {...restProps}
      >
        <StyledImageWrapper>
          <img alt="" src={src} srcSet={srcSet} />
        </StyledImageWrapper>
        <Vertical spacing={spacing.small}>
          {heading && <SubHeading>{heading}</SubHeading>}
          <Text>{children}</Text>
          {href && (
            <Text>
              <p>
                <a href={href}>{href}</a>
              </p>
            </Text>
          )}
        </Vertical>
      </Horizontal>
    )
  }
}
