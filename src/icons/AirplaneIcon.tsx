import React from "react"
import * as types from "../types"
export const AirplaneIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="inherit" fillRule="nonzero">
        <path d="M22.982 7.274 3.737 18.385l-1.852-3.207L21.13 4.067a1.851 1.851 0 1 1 1.852 3.208Z" />
        <path d="M5.556 14.128 2.348 15.98.034 11.97l.801-.463zM15.98 8.11l-5.613 3.24L2.87 3.918l1.604-.926zM6.482 15.732l-3.208 1.851 2.315 4.01.802-.463zM16.906 9.713l-5.613 3.24 2.687 10.21 1.604-.926z" />
      </g>
    </svg>
  )
}
