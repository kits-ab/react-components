import React from "react"
import * as types from "../types"
export const MicroBlogIcon = (props: types.IconProps) => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M21.312 17.69c1.58-1.858 2.523-4.196 2.523-6.738C23.835 4.902 18.5 0 11.918 0 5.336 0 0 4.901 0 10.952c0 6.05 5.336 10.952 11.918 10.952a12.819 12.819 0 0 0 4.255-.72c.16-.055.336 0 .435.137.996 1.344 2.55 2.29 4.28 2.674a.236.236 0 0 0 .234-.378 4.659 4.659 0 0 1 .198-5.93l-.008.004ZM17.57 9.665l-3.069 2.33 1.114 3.689a.349.349 0 0 1-.533.387l-3.164-2.2-3.164 2.2a.349.349 0 0 1-.533-.387l1.114-3.689-3.07-2.33a.349.349 0 0 1 .203-.626l3.851-.08 1.267-3.639a.349.349 0 0 1 .658 0l1.268 3.639 3.85.08a.349.349 0 0 1 .208.626Z"
        fill="inherit"
        fillRule="nonzero"
      />
    </svg>
  )
}
