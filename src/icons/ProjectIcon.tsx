import * as React from "react"

import * as types from "../types"

export class ProjectIcon extends React.PureComponent<types.IconProps> {
  render() {
    return (
      <svg viewBox="0 0 24 24" width="24" height="24" {...this.props}>
        <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
      </svg>
    )
  }
}
