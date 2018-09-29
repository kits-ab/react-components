import "normalize.css"

import { darken, lighten, transparentize } from "polished"
import { injectGlobal } from "styled-components"

// tslint:disable
injectGlobal`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }
  
  .is-centered {
    text-align: center;
  }
  
  .is-flexed {
    flex: 1;
  }
`
// tslint:enable

// Dark
// export const colors = {
//   primary: darken(0.2, "#f37f4a"),
//
//   accent1: darken(0.2, "#c9c6a6"),
//   accent2: darken(0.2, "#c1ae48"),
//   accent3: darken(0.2, "#7ac4bb"),
//
//   background1: lighten(0.03, "#1e1e1e"),
//   background2: "#3a3a39",
//   background3: transparentize(0.8, "#000"),
//
//   border: "#4c4c4c",
//
//   line: "rgba(255,255,255,0.25)",
//
//   link: darken(0.1, "#f37f4a"),
//
//   text1: "hsl(0, 0%, 90%)",
//   text2: "#999999",
//   text3: "#666666"
// }

// Light
export const colors = {
  primary: "#f37f4a",

  accent1: "#c9c6a6",
  accent2: "#c1ae48",
  accent3: "#7ac4bb",

  background1: "#ffffff",
  background2: lighten(0.3, "#b0ad97"),
  background3: transparentize(0.8, "#000"),

  border: "white",

  line: "#c6c4b4",

  link: darken(0.1, "#f37f4a"),

  text1: "#333333",
  text2: "#777777",
  text3: "#999999"
}

export const fonts = {
  light:
    '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif',
  thin:
    '"HelveticaNeue-Thin", "Helvetica Neue Thin", "Helvetica Neue", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif'
}

export const spacing = {
  mini: 5,
  small: 10,
  medium: 20,
  large: 30,
  huge: 50
}

export const width = {
  mobile: 400,
  mobileMenu: 600,
  tablet: 700,
  desktop: 840,
  max: 1200
}
