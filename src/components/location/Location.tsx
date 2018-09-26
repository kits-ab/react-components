import * as React from "react"
import styled from "styled-components"

import { colors } from "../../styles/constants"
import * as types from "../../types"
import locationImage from "./Location.jpg"

const StyledDiv = styled.div`
  background-color: ${colors.background2};
  background-image: url(${locationImage});
  background-size: cover;
  height: 240px;
  overflow: hidden;

  > img {
    width: 100%;
  }
`

export type LocationProps = types.BaseProps

/**
 * TODO: Description...
 */
export class Location extends React.PureComponent<LocationProps> {
  render() {
    return <StyledDiv {...this.props} />
  }
}
