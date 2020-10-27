import React from "react"
import * as types from "../types"
export const SecurityIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path
        d="M19 8h-1.143V5.714A5.716 5.716 0 0012.143 0a5.716 5.716 0 00-5.714 5.714V8H5.286A2.292 2.292 0 003 10.286v11.428A2.292 2.292 0 005.286 24H19a2.292 2.292 0 002.286-2.286V10.286A2.292 2.292 0 0019 8zm-6.857 10.286A2.292 2.292 0 019.857 16a2.292 2.292 0 012.286-2.286A2.292 2.292 0 0114.429 16a2.292 2.292 0 01-2.286 2.286zM15.686 8H8.6V5.714a3.546 3.546 0 013.543-3.543 3.546 3.546 0 013.543 3.543V8z"
        fill="inherit"
        fillRule="nonzero"
      />
    </svg>
  )
}
