import React from "react"
import * as types from "../types"
export const NewWindowIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="inherit" fillRule="nonzero">
        <path d="M9 3v12h12V3H9ZM8 0h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2Z" />
        <path d="M13.5 21a1.5 1.5 0 0 1 0 3h-12A1.5 1.5 0 0 1 0 22.5v-12a1.5 1.5 0 0 1 3 0V21h10.5Z" />
      </g>
    </svg>
  )
}
