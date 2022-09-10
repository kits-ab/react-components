import React from "react"
import * as types from "../types"
export const IntegrationIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0 13.333h10.667V0H0v13.333ZM0 24h10.667v-8H0v8Zm13.333 0H24V10.667H13.333V24Zm0-24v8H24V0H13.333Z"
        fill="inherit"
        fillRule="nonzero"
      />
    </svg>
  )
}
