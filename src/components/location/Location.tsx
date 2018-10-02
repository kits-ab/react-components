import * as React from "react"
import styled from "styled-components"

import { colors, fonts } from "../../styles/constants"
import * as types from "../../types"
import { cssVar } from "../../utils/cssUtils"

const StyledDiv = styled.div`
  background-color: ${colors.background2};
  background-color: var(--background2);
  height: 240px;
  overflow: hidden;

  > img {
    width: 100%;
  }
`

export interface LocationProps extends types.BaseProps {
  /** The coordinates of the location to show. */
  coordinates: number[]
  /** The title of the location. */
  title?: string
  /** The sub title of the location. */
  subtitle?: string
}

let Map = (props: any) => null
let Popup = (props: any) => null

if (typeof window !== "undefined") {
  const ReactMapboxGl = require("react-mapbox-gl") // tslint:disable-line
  Map = ReactMapboxGl.default({
    accessToken:
      "pk.eyJ1Ijoia29raXRvdHNvcyIsImEiOiJjaXk0d3R5bjEwMDJsMnlscWhtOGlydDl3In0.Xfr-Sr_D4JJVK2kVNsm4vA",
    attributionControl: false,
    scrollZoom: false
  })
  Popup = ReactMapboxGl.Popup
}

const StyledPopup = styled(Popup)`
  cursor: pointer;

  .mapboxgl-popup-content {
    color: white;
    background: rgba(0, 0, 0, 0.75);
  }

  .mapboxgl-popup-tip {
    border-top-color: rgba(0, 0, 0, 0.75) !important;
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
export class Location extends React.PureComponent<LocationProps> {
  render() {
    const { coordinates, title, subtitle, ...restProps } = this.props
    const reversedCoordinates = [...coordinates].reverse()

    return (
      <StyledDiv {...restProps}>
        <Map
          center={[reversedCoordinates[0], reversedCoordinates[1] + 0.001]}
          containerStyle={{ height: "240px", width: "100%" }}
          style={`mapbox://styles/mapbox/${cssVar("--map") || colors.map}`}
          zoom={[14]}
        >
          {title && (
            <StyledPopup anchor="bottom" coordinates={reversedCoordinates} onClick={this.openMap}>
              <b>{title}</b>
              {subtitle && <i>{subtitle}</i>}
            </StyledPopup>
          )}
        </Map>
      </StyledDiv>
    )
  }

  private openMap = () => {
    const { coordinates } = this.props
    window.location.href = `http://maps.apple.com/?q=${coordinates}`
  }
}
