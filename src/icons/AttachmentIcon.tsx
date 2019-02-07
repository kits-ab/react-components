import * as React from "react"
import * as types from "../types"
export class AttachmentIcon extends React.PureComponent<types.IconProps> {
  render() {
    const props = this.props
    return (
      <svg width="24" height="24" viewBox="0 0 24 24" {...props}>
        <path
          d="M16.379 7.173l-8.712 8.766a.74.74 0 0 1-1.046 0 .745.745 0 0 1 0-1.05L16.832 4.614a1.075 1.075 0 0 1 1.533 0l2.3 2.315a1.097 1.097 0 0 1 0 1.543l-10.21 10.276a4.667 4.667 0 0 1-6.622 0 4.738 4.738 0 0 1 0-6.667l8.713-8.766a1.241 1.241 0 0 0 0-1.753 1.229 1.229 0 0 0-1.743 0L2.091 10.33c-2.788 2.808-2.788 7.363 0 10.17a7.115 7.115 0 0 0 10.106 0L23.174 9.454a2.496 2.496 0 0 0 0-3.51L19.341 2.09a2.449 2.449 0 0 0-3.485 0L4.879 13.137a3.236 3.236 0 0 0 0 4.555 3.188 3.188 0 0 0 4.53 0l8.713-8.767a1.241 1.241 0 0 0 0-1.752 1.23 1.23 0 0 0-1.743 0z"
          fill="inherit"
          fillRule="evenodd"
        />
      </svg>
    )
  }
}
