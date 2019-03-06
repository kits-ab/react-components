import * as React from "react"
import styled from "styled-components"

import { colors } from "../../styles/constants"
import * as types from "../../types"

interface ImageProps {
  rotate: number
  scale: number
  translateY: number
  zIndex: number
}

const StyledDiv = styled.div`
  display: block;
  overflow: hidden;
  position: relative;
  padding: 30px 0 60px;

  .collage-wrapper {
    display: inline-block;
    height: inherit;
    position: relative;
    right: -50%;
    width: 100%;
    white-space: nowrap;
  }

  .collage-images {
    display: inline-block;
    height: inherit;
    position: relative;
    transform: translateX(-50%);
    vertical-align: middle;
  }
`

const StyledImage = styled.div`
  border: 5px solid ${colors.border};
  border: 5px solid var(--border);
  box-shadow: 0 1px 3px 0 ${colors.lineShadow};
  box-shadow: 0 1px 3px 0 var(--lineShadow);
  display: inline-block;
  margin: -10px -50px;
  position: relative;
  transform: ${({ rotate, scale, translateY }: ImageProps) =>
    `rotate(${rotate}deg) scale(${scale}) translateY(${translateY}px)`};
  z-index: ${({ zIndex }: ImageProps) => zIndex};

  img {
    display: block;
    height: 200px;
  }
`

export interface CollageProps extends types.BaseProps {
  /** The images to show in the collage. */
  images: Array<{ src: string; srcSet?: string }>
}

/**
 * Collage is used to show a set of images in a collage. The rotation, scale and position is
 * randomized within some limits.
 */
export class Collage extends React.PureComponent<CollageProps> {
  render() {
    const { images, ...restProps } = this.props
    return (
      <StyledDiv {...restProps}>
        <div className="collage-wrapper">
          <div className="collage-images">
            {images.map((image: { src: string; srcSet?: string }, index: number) => (
              <StyledImage
                key={"image" + index}
                rotate={this.getRotation()}
                scale={this.getScale(index)}
                translateY={this.getTranslateY(index)}
                zIndex={this.getZIndex(index)}
              >
                <img src={image.src} srcSet={image.srcSet} />
              </StyledImage>
            ))}
          </div>
        </div>
      </StyledDiv>
    )
  }

  private getRotation = () => Math.random() * 10 - 5
  private getScale = (index: number) => (index % 2 === 0 ? 1 : 1 - Math.random() * 0.1)
  private getTranslateY = (index: number) => (index % 2 === 0 ? 30 : 0)
  private getZIndex = (index: number) => (index % 2 === 0 ? 3 : 2)
}
