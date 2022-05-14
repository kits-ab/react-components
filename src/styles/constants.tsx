import "normalize.css"

import { darken, lighten, transparentize } from "polished"
import { createGlobalStyle } from "styled-components"

export const colorsDark = {
  primary: darken(0.2, "#8BA17D"),
  primaryDarker: darken(0.1, darken(0.2, "#8BA17D")),

  accent1: darken(0.2, "#E0D250"),
  accent2: darken(0.2, "#7E5869"),
  accent3: darken(0.2, "#5E8686"),

  background1: lighten(0.03, "#1e1e1e"),
  background2: "#3a3a39",
  background3: transparentize(0.8, "#000000"),
  background4: transparentize(0.03, lighten(0.03, "#1e1e1e")),
  background5: lighten(0.03, "#3a3a39"),

  border: "#4c4c4c",
  border2: transparentize(0.03, "#4c4c4c"),

  line: transparentize(0.75, "#ffffff"),
  lineShadow: transparentize(0.8, "#ffffff"),

  link: darken(0.1, "#8BA17D"),

  text1: "#e5e5e5",
  text2: "#bbbbbb",
  text3: "#666666",

  map: "dark-v9",

  syntaxAttribute: "#7ac4bb",
  syntaxComment: "#666666",
  syntaxImportant: darken(0.1, "#f37f4a"),
  syntaxKeyword: darken(0.1, "#f37f4a"),
  syntaxPunctuation: "#666666",
  syntaxString: "#7ac4bb",
  syntaxTag: "#569CD6",
  syntaxVariable: "#666666"
}

export const colors = {
  primary: "#8BA17D",
  primaryDarker: darken(0.1, "#8BA17D"),

  accent1: "#E0D250",
  accent2: "#7E5869",
  accent3: "#5E8686",

  background1: "#ffffff",
  background2: lighten(0.3, "#b0ad97"),
  background3: transparentize(0.8, "#000000"),
  background4: transparentize(0.03, "#ffffff"),
  background5: lighten(0.03, lighten(0.3, "#b0ad97")),

  border: "#ffffff",
  border2: transparentize(0.03, "#ffffff"),

  line: "#c6c4b4",
  lineShadow: transparentize(0.8, "#000000"),

  link: darken(0.1, "#8BA17D"),

  text1: "#333333",
  text2: "#777777",
  text3: "#999999",

  map: "streets-v10",

  syntaxAttribute: "#5E8686",
  syntaxComment: "#999999",
  syntaxImportant: darken(0.1, "#E0D250"),
  syntaxKeyword: darken(0.1, "#8BA17D"),
  syntaxPunctuation: "#999999",
  syntaxString: darken(0.1, "#5E8686"),
  syntaxTag: "#7E5869",
  syntaxVariable: "#999999"
}

// tslint:disable
export const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;

    --primary: ${colors.primary};
    --primaryDarker: ${colors.primaryDarker};
    --accent1: ${colors.accent1};
    --accent2: ${colors.accent2};
    --accent3: ${colors.accent3};
    --background1: ${colors.background1};
    --background2: ${colors.background2};
    --background3: ${colors.background3};
    --background4: ${colors.background4};
    --background5: ${colors.background5};
    --border: ${colors.border};
    --border2: ${colors.border2};
    --line: ${colors.line};
    --lineShadow: ${colors.lineShadow};
    --link: ${colors.link};
    --text1: ${colors.text1};
    --text2: ${colors.text2};
    --text3: ${colors.text3};
    --map: ${colors.map};
    --syntaxComment: ${colors.syntaxComment};
    --syntaxPunctuation: ${colors.syntaxPunctuation};
    --syntaxTag: ${colors.syntaxTag};
    --syntaxString: ${colors.syntaxString};
    --syntaxAttribute: ${colors.syntaxAttribute};
    --syntaxKeyword: ${colors.syntaxKeyword};
    --syntaxImportant: ${colors.syntaxImportant};
    --syntaxVariable: ${colors.syntaxVariable};

    @media (prefers-color-scheme: dark) {
      --primary: ${colorsDark.primary};
      --primaryDarker: ${colorsDark.primaryDarker};
      --accent1: ${colorsDark.accent1};
      --accent2: ${colorsDark.accent2};
      --accent3: ${colorsDark.accent3};
      --background1: ${colorsDark.background1};
      --background2: ${colorsDark.background2};
      --background3: ${colorsDark.background3};
      --background4: ${colorsDark.background4};
      --background5: ${colorsDark.background5};
      --border: ${colorsDark.border};
      --border2: ${colorsDark.border2};
      --line: ${colorsDark.line};
      --lineShadow: ${colorsDark.lineShadow};
      --link: ${colorsDark.link};
      --text1: ${colorsDark.text1};
      --text2: ${colorsDark.text2};
      --text3: ${colorsDark.text3};
      --map: ${colorsDark.map};
      --syntaxComment: ${colorsDark.syntaxComment};
      --syntaxPunctuation: ${colorsDark.syntaxPunctuation};
      --syntaxTag: ${colorsDark.syntaxTag};
      --syntaxString: ${colorsDark.syntaxString};
      --syntaxAttribute: ${colorsDark.syntaxAttribute};
      --syntaxKeyword: ${colorsDark.syntaxKeyword};
      --syntaxImportant: ${colorsDark.syntaxImportant};
      --syntaxVariable: ${colorsDark.syntaxVariable};
    }
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
    flex: 1 1 auto;
  }
`
// tslint:enable

export const easings = {
  easeOut: "cubic-bezier(0, 0, 0.7, 1)"
}

export const fonts = {
  light:
    '"HelveticaNeue-Light", "Helvetica Neue Light", "Helvetica Neue", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif',
  thin: '"HelveticaNeue-Thin", "Helvetica Neue Thin", "Helvetica Neue", "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", sans-serif'
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
