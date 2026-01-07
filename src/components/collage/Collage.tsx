import React from "react"
import { styled } from "styled-components"

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

const StyledImage = styled("div").withConfig({
  shouldForwardProp: (prop) => !["translateY", "zIndex"].includes(prop)
})<ImageProps>`
  border: 5px solid ${colors.border};
  border: 5px solid var(--border);
  box-shadow: 0 1px 3px 0 ${colors.lineShadow};
  box-shadow: 0 1px 3px 0 var(--lineShadow);
  display: inline-block;
  margin: -10px -50px;
  position: relative;
  transform: ${({ rotate, scale, translateY }) =>
    `rotate(${rotate}deg) scale(${scale}) translateY(${translateY}px)`};
  z-index: ${({ zIndex }) => zIndex};

  img {
    display: block;
    height: 200px;
  }
`

export type CollageProps = types.BaseProps & {
  /** The images to show in the collage. */
  images: { src: string; srcSet?: string; alt?: string }[]
}

/**
 * Collage is used to show a set of images in a collage. The rotation, scale and position is
 * randomized within some limits.
 */
export const Collage = ({ images, ...restProps }: CollageProps) => {
  const memoizedImages = React.useMemo(() => {
    return images.map((image, index) => ({
      ...image,
      // eslint-disable-next-line react-hooks/purity
      rotation: Math.random() * 10 - 5,
      // eslint-disable-next-line react-hooks/purity
      scale: index % 2 === 0 ? 1 : 1 - Math.random() * 0.1,
      translateY: index % 2 === 0 ? 30 : 0,
      zIndex: index % 2 === 0 ? 3 : 2
    }))
  }, [images])

  return (
    <StyledDiv {...restProps}>
      <div className="collage-wrapper">
        <div className="collage-images">
          {memoizedImages.map((image, index) => (
            <StyledImage
              key={"image" + index}
              rotate={image.rotation}
              scale={image.scale}
              translateY={image.translateY}
              zIndex={image.zIndex}
            >
              <img src={image.src} srcSet={image.srcSet} alt={image.alt} />
            </StyledImage>
          ))}
        </div>
      </div>
    </StyledDiv>
  )
}
