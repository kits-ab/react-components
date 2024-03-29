import React from "react"
import * as types from "../types"
export const SkiingIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g fill="inherit" fillRule="evenodd">
        <circle fill="inherit" fillRule="nonzero" cx={20.4} cy={2.4} r={2.4} />
        <path
          d="M9.96 5.4s2.16-3 5.4-3C17.04 2.4 18 3.48 18 4.92c0 .24-.12 4.44-.12 4.44l-.96-2.76-3 1.8-3.96-3Z"
          fill="inherit"
          fillRule="nonzero"
        />
        <path stroke="inherit" strokeWidth={1.5} d="M14.4 7.68 3.72.96" />
        <path
          d="M22.08 20.4c-1.68.84-4.08.36-5.76-.6l-15-8.52-1.2 2.04 15 8.52c.96.6 2.16.84 3.24.84s2.04-.24 3-.72l1.92-1.08-1.2-.48Z"
          fill="inherit"
          fillRule="nonzero"
        />
        <path
          d="m21.72 12.12-3.6-2.28c-.84-.48-1.32-1.44-1.32-2.52V5.04M8.64 16.92l5.04-2.88c.96-.6 1.08-1.92.12-2.52-1.68-1.2-3.96-2.64-3.96-2.64"
          stroke="inherit"
          strokeWidth={2}
        />
        <path
          d="M14.16 10.44 8.64 6.6l-.48.48a2.38 2.38 0 0 0 .6 3.84l5.16 2.52.24-3Z"
          fill="inherit"
          fillRule="nonzero"
        />
      </g>
    </svg>
  )
}
