import * as React from "react"
import * as types from "../types"
export class SecurityIcon extends React.PureComponent<types.IconProps> {
  render() {
    const props = this.props
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path
          d="M19 8h-1.143V5.714A5.716 5.716 0 0 0 12.143 0a5.716 5.716 0 0 0-5.714 5.714V8H5.286A2.292 2.292 0 0 0 3 10.286v11.428A2.292 2.292 0 0 0 5.286 24H19a2.292 2.292 0 0 0 2.286-2.286V10.286A2.292 2.292 0 0 0 19 8zm-6.857 10.286A2.292 2.292 0 0 1 9.857 16a2.292 2.292 0 0 1 2.286-2.286A2.292 2.292 0 0 1 14.429 16a2.292 2.292 0 0 1-2.286 2.286zM15.686 8H8.6V5.714a3.546 3.546 0 0 1 3.543-3.543 3.546 3.546 0 0 1 3.543 3.543V8z"
          fill="inherit"
          fillRule="nonzero"
        />
      </svg>
    )
  }
}
