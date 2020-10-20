import React from "react"
import * as types from "../types"
export const ProjectIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M21.6 5.8h-4.8V3.4c0-1.332-1.068-2.4-2.4-2.4H9.6a2.392 2.392 0 00-2.4 2.4v2.4H2.4A2.382 2.382 0 00.012 8.2L0 21.4c0 1.332 1.068 2.4 2.4 2.4h19.2c1.332 0 2.4-1.068 2.4-2.4V8.2c0-1.332-1.068-2.4-2.4-2.4zm-7.2 0H9.6V3.4h4.8v2.4z"
        fill="inherit"
        fillRule="nonzero"
      />
    </svg>
  )
}
