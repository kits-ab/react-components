import * as React from "react"
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

  code {
    background-color: ${colors.background2};
    border-radius: 2px;
    color: ${colors.text1};
    font-family: "Courier New", monospace;
    padding: 3px 5px 3px 5px;
  }

  h1 {
    color: ${colors.text1};
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
    font-family: ${fonts.thin};
    font-size: 26px;
    font-style: normal;
    font-weight: 200;
    line-height: 1.2;
    margin: 0;
    margin-bottom: 13px;
  }

  h3 {
    color: ${colors.text2};
    font-family: ${fonts.thin};
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: 10px;
  }

  h4 {
    color: ${colors.text2};
    font-family: ${fonts.thin};
    font-size: 18px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: 10px;
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
    font-family: ${fonts.light};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.4;
  }

  p {
    color: ${colors.text1};
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

  & + & {
    margin-top: ${spacing.small}px;
  }
`

/**
 * Text is used to output text blocks with correct formatting.
 */
export class Text extends React.PureComponent<TextProps> {
  render() {
    const { children, ...restProps } = this.props
    return typeof children === "string" ? (
      <StyledDiv
        {...restProps}
        dangerouslySetInnerHTML={{
          __html: children as string
        }}
      />
    ) : (
      <StyledDiv {...restProps}>{children}</StyledDiv>
    )
  }
}
