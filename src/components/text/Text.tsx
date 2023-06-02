import React from "react"
import styled from "styled-components"

import { colors, fonts, spacing, width } from "../../styles/constants"
import * as types from "../../types"

export interface TextProps extends types.BaseProps {
  /** The content of the text. */
  children: React.ReactNode | string
}

const StyledDiv = styled.div`
  a {
    color: ${colors.link};
    color: var(--link);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  b,
  strong {
    font-family: ${fonts.light};
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
  }

  blockquote {
    margin: 0;
    padding-bottom: ${spacing.large}px;
    padding-top: ${spacing.medium}px;
    position: relative;

    @media screen and (max-width: ${width.mobile}px) {
      padding-bottom: ${spacing.small}px;
      padding-top: ${spacing.small}px;
    }

    p {
      border-left: 1px solid ${colors.line};
      border-left: 1px solid var(--line);
      color: ${colors.text3};
      color: var(--text3);
      margin-left: ${spacing.medium}px;
      margin-right: ${spacing.medium}px;
      padding-left: ${spacing.medium}px;

      @media screen and (max-width: ${width.mobile}px) {
        margin-left: 10px;
        margin-right: 0;
        padding-left: ${spacing.small}px;
      }
    }
  }

  code {
    background-color: ${colors.background2};
    background-color: var(--background2);
    border-radius: 2px;
    color: ${colors.text1};
    color: var(--text1);
    font-family: "Courier New", monospace;
    padding: 3px 5px;
  }

  h1 {
    color: ${colors.text1};
    color: var(--text1);
    font-family: ${fonts.thin};
    font-size: 64px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: 32px;
    text-align: center;

    @media screen and (max-width: ${width.mobile}) {
      font-size: 48px;
      margin-bottom: 24px;
    }
  }

  h2 {
    color: ${colors.text2};
    color: var(--text2);
    font-family: ${fonts.thin};
    font-size: 26px;
    font-style: normal;
    font-weight: 200;
    line-height: 1.2;
    margin: 0 0 13px;
  }

  h3 {
    color: ${colors.text2};
    color: var(--text2);
    font-family: ${fonts.thin};
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: 10px;
  }

  h4 {
    color: ${colors.text2};
    color: var(--text2);
    font-family: ${fonts.thin};
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: 10px;
  }

  img {
    margin-bottom: ${spacing.medium}px;
    margin-top: ${spacing.medium}px;
    max-width: 100%;

    &.image-left {
      float: left;
      margin: ${spacing.mini}px ${spacing.large}px ${spacing.small}px -${spacing.medium}px;
      width: 50%;

      @media screen and (max-width: ${width.mobileMenu}px) {
        float: none;
        margin-left: -${spacing.large}px;
        margin-right: -${spacing.large}px;
        max-width: none;
        width: 120%;
        width: calc(100% + ${2 * spacing.large}px);
      }

      @media screen and (max-width: ${width.mobile}px) {
        margin-left: -${spacing.medium}px;
        margin-right: -${spacing.medium}px;
        width: 120%;
        width: calc(100% + ${2 * spacing.medium}px);
      }
    }
  }

  video {
    margin-bottom: ${spacing.medium}px;
    margin-top: ${spacing.medium}px;
    max-width: 100%;
  }

  .image-grid {
    left: 50%;
    margin: ${spacing.medium}px -50vw ${spacing.large}px;
    position: relative;
    right: 50%;
    width: 100vw;

    &::after {
      clear: both;
      content: "";
      display: block;
    }

    > img {
      margin-bottom: 0 !important;
      margin-top: 0 !important;

      &:first-child:not(:last-child) {
        float: left;
        width: 66.6666%;
      }

      &:not(:first-child) {
        border-left: 2px solid white;
        float: left;
        width: 33.3333%;
      }

      &:last-child {
        border-top: 2px solid white;
      }

      @media screen and (max-width: ${width.mobile}px) {
        &:first-child:not(:last-child) {
          border-bottom: 2px solid white;
          width: 100%;
        }

        &:not(:first-child) {
          border-left: 0;
          width: 50%;
        }

        &:last-child {
          border-left: 2px solid white;
          border-top: 0;
        }
      }
    }
  }

  i,
  em {
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: italic;
    font-weight: 200;
  }

  li {
    color: ${colors.text1};
    color: var(--text1);
    font-family: ${fonts.light};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.4;
  }

  p {
    color: ${colors.text1};
    color: var(--text1);
    font-family: ${fonts.light};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.4;
    margin-bottom: ${spacing.small}px;
    margin-top: 0;

    &:last-child {
      margin-bottom: 0;
    }

    &.is-centered {
      text-align: center;
    }
  }

  ul {
    list-style: none;
    margin: 0 0 10px;
    padding: 0;

    li {
      margin-left: 30px;
      text-indent: -10px;

      &::before {
        color: ${colors.text1};
        color: var(--text1);
        content: "–";
        left: -10px;
        position: relative;
      }
    }
  }

  & + & {
    margin-top: ${spacing.small}px;
  }

  .gatsby-highlight {
    background-color: ${colors.background2};
    background-color: var(--background2);
    left: 50%;
    margin: 30px -50vw;
    overflow-y: auto;
    padding-top: ${spacing.medium}px;
    padding-bottom: ${spacing.medium}px;
    position: relative;
    right: 50%;
    width: 100vw;
    -webkit-overflow-scrolling: touch;

    pre {
      margin-left: auto;
      margin-right: auto;
      max-width: ${width.desktop}px;
      padding-top: 0;
      padding-bottom: 0;
      padding-left: ${spacing.large}px;
      padding-left: calc(${spacing.large}px + env(safe-area-inset-left));
      padding-right: ${spacing.large}px;
      padding-right: calc(${spacing.large}px + env(safe-area-inset-right));

      @media (max-width: ${width.mobile}px) {
        padding-left: ${spacing.medium}px;
        padding-left: calc(${spacing.medium}px + env(safe-area-inset-left));
        padding-right: ${spacing.medium}px;
        padding-right: calc(${spacing.medium}px + env(safe-area-inset-right));
      }
    }

    .namespace {
      opacity: 0.7;
    }

    .token {
      &.comment,
      &.prolog,
      &.doctype,
      &.cdata {
        color: ${colors.syntaxComment};
        color: var(--syntaxComment);
      }

      &.punctuation {
        color: ${colors.syntaxPunctuation};
        color: var(--syntaxPunctuation);
      }

      &.property,
      &.tag,
      &.boolean,
      &.number,
      &.constant,
      &.symbol {
        color: ${colors.syntaxTag};
        color: var(--syntaxTag);
      }

      &.selector,
      &.attr-name,
      &.builtin {
        color: ${colors.syntaxAttribute};
        color: var(--syntaxAttribute);
      }

      &.string {
        color: ${colors.syntaxString};
        color: var(--syntaxString);
      }

      &.atrule,
      &.attr-value,
      &.keyword {
        color: ${colors.syntaxKeyword};
        color: var(--syntaxKeyword);
      }

      &.regex,
      &.important {
        color: ${colors.syntaxImportant};
        color: var(--syntaxImportant);
      }

      &.important {
        font-weight: bold;
      }

      &.entity {
        cursor: help;
      }

      &.operator,
      &.entity,
      &.url,
      &.variable {
        color: ${colors.syntaxVariable};
        color: var(--syntaxVariable);
      }
    }

    .language-css,
    .style {
      .token.string {
        color: ${colors.syntaxVariable};
        color: var(--syntaxVariable);
      }
    }
  }
`

/**
 * Text is used to output text blocks with correct formatting.
 */
export class Text extends React.PureComponent<TextProps> {
  render() {
    const { children, ...restProps } = this.props
    if (typeof children === "string") {
      const html = (children as string)
        .replace(/title="image-left"/g, 'class="image-left"')
        .replace(/<h6>/g, '<div class="image-grid">')
        .replace(/<\/h6>/g, "</div>")

      return (
        <StyledDiv
          {...restProps}
          dangerouslySetInnerHTML={{
            __html: html
          }}
        />
      )
    } else {
      return <StyledDiv {...restProps}>{children}</StyledDiv>
    }
  }
}
