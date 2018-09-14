import { format } from "date-fns"
import * as svLocale from "date-fns/locale/sv"
import * as React from "react"
import styled from "styled-components"

import { colors, fonts, spacing } from "../../styles/constants"
import * as types from "../../types"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Link } from "../link/Link"

const StyledHorizontal = styled(Horizontal)`
  > time {
    color: ${colors.text2};
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    white-space: nowrap;
  }

  > span {
    color: ${colors.text2};
    display: inline-block;
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;

    > a {
      color: ${colors.link};
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export interface BylineProps extends types.BaseProps {
  /** The authors of the article. */
  authors: types.Person[]
  /** The time when the article was published. */
  publishTime: Date
}

/**
 * Byline is used to how the publish time and authors of an article.
 */
export class Byline extends React.PureComponent<BylineProps> {
  render() {
    const { authors, publishTime, ...restProps } = this.props
    return (
      <StyledHorizontal separator={true} spacing={spacing.small} {...restProps}>
        <time dateTime={publishTime.toISOString()}>
          {format(publishTime, "D MMMM YYYY", { locale: svLocale })}
        </time>
        <span>
          {authors.map((author, index) => (
            <React.Fragment key={`author-${author.id}`}>
              {index !== 0 ? ", " : ""}
              {author.href ? <Link to={author.href}>{author.name}</Link> : author.name}
            </React.Fragment>
          ))}
        </span>
      </StyledHorizontal>
    )
  }
}
