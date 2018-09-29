import { transparentize } from "polished"
import * as React from "react"
import styled, { css, StyledFunction } from "styled-components"

import { colors, fonts, spacing } from "../../styles/constants"
import * as types from "../../types"
import { Link, LinkProps } from "../link/Link"

const sharedStyle = css`
  border: 5px solid ${colors.border};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  display: block;
  height: inherit;
  max-width: 450px;
  overflow: hidden;
  position: relative;

  .image-wrapper {
    display: inline-block;
    height: inherit;
    position: relative;
    right: -50%;
    width: 100%;
  }

  .image-image {
    display: inline-block;
    height: inherit;
    position: relative;
    transform: translateX(-50%);
    vertical-align: middle;
  }

  .image-info {
    background-color: ${transparentize(0.03, colors.border)};
    bottom: 0;
    font-family: ${fonts.light};
    font-style: normal;
    font-weight: 300;
    left: 0;
    line-height: 1.4;
    position: absolute;
    padding: ${spacing.small}px;
    right: 0;
  }

  .image-info-text {
    color: ${colors.text1};
    margin-bottom: 0;
    margin-top: 0;
    text-align: left;
  }

  .image-info-additional-text {
    color: ${colors.text2};
    font-size: 14px;
    margin-bottom: 0;
    margin-top: 0;
    text-align: left;
  }
`

const StyledLink = (styled(Link) as StyledFunction<LinkProps>)`
  ${sharedStyle}
`

const StyledDiv = styled.div`
  ${sharedStyle};
`

export interface ImageProps extends types.BaseProps {
  /** Thr url to link to if you want the image to act as a link. */
  href?: string
  /** The additional info text to show in the banner of the image. */
  infoAdditionalText?: string
  /** The info text to show in the banner of the image. */
  infoText?: string
  /** The source of the image to show. */
  src: string
  /** The source set of the image to show. */
  srcSet?: string
}

/**
 * Image is used to show an image that resizes itself from the middle. It also has the option to add
 * a banner with info. The image is meant to be used for linking to other content so you can also
 * pass it a url to create a link.
 */
export class Image extends React.PureComponent<ImageProps> {
  render() {
    const { href, infoAdditionalText, infoText, src, srcSet, ...restProps } = this.props
    const content = (
      <>
        <div className="image-wrapper">
          <img alt="" className="image-image" src={src} srcSet={srcSet} />
        </div>
        {(infoText || infoAdditionalText) && (
          <div className="image-info">
            {infoText && <p className="image-info-text">{infoText}</p>}
            {infoAdditionalText && (
              <p className="image-info-additional-text">{infoAdditionalText}</p>
            )}
          </div>
        )}
      </>
    )

    return href ? (
      <StyledLink to={href} {...restProps}>
        {content}
      </StyledLink>
    ) : (
      <StyledDiv {...restProps}>{content}</StyledDiv>
    )
  }
}
