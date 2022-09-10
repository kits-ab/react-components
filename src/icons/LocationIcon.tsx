import React from "react"
import * as types from "../types"
export const LocationIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M12 24s9-8.373 9-15c0-6.627-4.029-9-9-9S3 2.373 3 9s9 15 9 15ZM7.5 7.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0Z"
        fill="inherit"
        fillRule="nonzero"
      />
    </svg>
  )
}
