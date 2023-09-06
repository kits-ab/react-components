import React from "react"
import styled from "styled-components"

import { colors, fonts } from "../../styles/constants"
import * as types from "../../types"
import { cssVar } from "../../utils/cssUtils"
import "mapbox-gl/dist/mapbox-gl.css"
import Map, { Popup } from 'react-map-gl';

const StyledDiv = styled.div`
  background-color: ${colors.background2};
  background-color: var(--background2);
  height: 240px;
  overflow: hidden;

  > img {
    width: 100%;
  }
`

export type LocationProps = types.BaseProps & {
  /** The coordinates of the location to show. */
  coordinates: number[]
  /** The title of the location. */
  title?: string
  /** The sub title of the location. */
  subtitle?: string
}


const StyledPopup = styled(Popup)`
  cursor: pointer;

  .mapboxgl-popup-content {
    color: white;
    background: rgba(0 0 0 / 75%);
  }

  .mapboxgl-popup-tip {
    border-top-color: rgba(0 0 0 / 75%) !important;
  }

  b {
    display: block;
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    line-height: 1.2;
  }

  i {
    display: block;
    font-family: ${fonts.light};
    font-size: 12px;
    font-style: normal;
    font-weight: 200;
    line-height: 1.2;
    opacity: 0.6;
  }
`

/**
 * Location is used to show a location on a map.
 */
export const Location = ({ coordinates, title, subtitle, ...restProps }: LocationProps) => {
  const reversedCoordinates = [...coordinates].reverse()

  const openMap = () => {
    window.location.href = `http://maps.apple.com/?q=${coordinates}`
  }

  return (
    <StyledDiv {...restProps}>
      <Map
      mapboxAccessToken="pk.eyJ1Ijoia29raXRvdHNvcyIsImEiOiJjaXk0d3R5bjEwMDJsMnlscWhtOGlydDl3In0.Xfr-Sr_D4JJVK2kVNsm4vA"
      initialViewState={{
        longitude: reversedCoordinates[0],
        latitude: reversedCoordinates[1],
        zoom: 14
      }}
      style={{ height: "240px", width: "100%" }}
      mapStyle={`mapbox://styles/mapbox/${cssVar("--map") || colors.map}`}
      >
       {title && (<Popup longitude={reversedCoordinates[0]} latitude={reversedCoordinates[1]}
        anchor="bottom"
        closeButton={false}
        >
        <b>{title}</b>
        {subtitle && <i>{subtitle}</i>}
        </Popup>)}
      </Map>
    </StyledDiv>
  )
}
