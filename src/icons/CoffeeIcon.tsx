import React from "react"
import * as types from "../types"
export const CoffeeIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="inherit" fillRule="evenodd">
        <path
          d="M21.517 10.966c0-.69-.241-1.276-.724-1.76a2.394 2.394 0 0 0-1.759-.723h-.827v4.965h.827c.69 0 1.276-.241 1.76-.724a2.394 2.394 0 0 0 .723-1.758ZM0 20.896h23.172a3.19 3.19 0 0 1-.97 2.341 3.19 3.19 0 0 1-2.34.97H3.31a3.19 3.19 0 0 1-2.34-.97 3.19 3.19 0 0 1-.97-2.34Zm24-9.93c0 1.37-.485 2.54-1.455 3.51-.97.97-2.14 1.455-3.51 1.455h-.828v.414c0 .793-.285 1.474-.854 2.043a2.788 2.788 0 0 1-2.043.853H6.207a2.788 2.788 0 0 1-2.043-.853 2.788 2.788 0 0 1-.854-2.043V6.828c0-.225.082-.419.246-.582A.795.795 0 0 1 4.138 6h14.896c1.371 0 2.541.485 3.511 1.455.97.97 1.455 2.14 1.455 3.51Z"
          fillRule="nonzero"
        />
        <path d="M7 5c.552 0 1-.373 1-.833V2.5c0-.46-.448-.833-1-.833S6 2.04 6 2.5v1.667C6 4.627 6.448 5 7 5ZM11 5c.552 0 1-.373 1-.833V.833C12 .373 11.552 0 11 0s-1 .373-1 .833v3.334c0 .46.448.833 1 .833ZM15 5c.553 0 1-.373 1-.833V2.5c0-.46-.447-.833-1-.833-.552 0-1 .373-1 .833v1.667c0 .46.448.833 1 .833Z" />
      </g>
    </svg>
  )
}
