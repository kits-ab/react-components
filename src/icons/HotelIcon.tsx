import React from "react"
import * as types from "../types"
export const HotelIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.175 10.5 21 8.326V3c0-.825-.675-1.5-1.5-1.5H18c-.825 0-1.5.675-1.5 1.5v.83l-3-2.998C13.09.447 12.716 0 12 0s-1.09.446-1.5.833L.825 10.5C.357 10.988 0 11.343 0 12c0 .845.648 1.5 1.5 1.5H3v9c0 .825.675 1.5 1.5 1.5H9v-7.5c0-.825.675-1.5 1.5-1.5h3c.825 0 1.5.675 1.5 1.5V24h4.5c.825 0 1.5-.675 1.5-1.5v-9h1.5c.852 0 1.5-.655 1.5-1.5 0-.657-.357-1.012-.825-1.5Z"
        fill="inherit"
        fillRule="nonzero"
      />
    </svg>
  )
}
