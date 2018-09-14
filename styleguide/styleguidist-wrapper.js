import React from "react"

export default class Wrapper extends React.Component {
  onClick(width) {
    if (width === 0) {
      this.wrapper.style.borderRight = "none"
      this.wrapper.style.width = "auto"
    } else {
      this.wrapper.style.borderRight = "1px solid #e8e8e8"
      this.wrapper.style.width = `${width}px`
    }
  }

  render() {
    const style = {
      backgroundColor: "white",
      borderBottomLeftRadius: 3,
      borderBottomRightRadius: 3,
      border: "1px solid #e8e8e8",
      borderTop: "none",
      color: "#333",
      cursor: "pointer",
      display: "inline-block",
      fontFamily:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif',
      fontSize: 14,
      marginLeft: 5,
      padding: "5px 10px"
    }

    return (
      <div ref={a => (this.wrapper = a)} style={{ margin: -16, padding: 16, position: "relative" }}>
        <div style={{ position: "absolute", left: 100, bottom: -27 }}>
          <span style={style} onClick={this.onClick.bind(this, 0)}>
            Auto
          </span>
          <span style={style} onClick={this.onClick.bind(this, 400)}>
            400
            <span style={{ fontSize: 10 }}>px</span>
          </span>
          <span style={style} onClick={this.onClick.bind(this, 600)}>
            600
            <span style={{ fontSize: 10 }}>px</span>
          </span>
          <span style={style} onClick={this.onClick.bind(this, 800)}>
            800
            <span style={{ fontSize: 10 }}>px</span>
          </span>
        </div>
        {this.props.children}
      </div>
    )
  }
}
