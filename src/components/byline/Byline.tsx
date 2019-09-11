import { format } from "date-fns"
import { sv } from "date-fns/locale"
import * as React from "react"
import styled from "styled-components"

import { colors, fonts, spacing } from "../../styles/constants"
import * as types from "../../types"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Link } from "../link/Link"

const StyledHorizontal = styled(Horizontal)`
  > time {
    color: ${colors.text2};
    color: var(--text2);
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    white-space: nowrap;
  }

  > span {
    color: ${colors.text2};
    color: var(--text2);
    display: inline-block;
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;

    > a {
      color: ${colors.link};
      color: var(--link);
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export interface BylineProps extends types.BaseProps {
  /** The authors or presenters of the article or presentation. */
  persons: types.Person[]
  /** The time when the article or presentation was published. */
  publishTime?: Date
}

/**
 * Byline is used to show the publish time and authors of an article or presentation.
 */
export class Byline extends React.PureComponent<BylineProps> {
  render() {
    const { persons, publishTime, ...restProps } = this.props
    return (
      <StyledHorizontal separator={true} spacing={spacing.small} {...restProps}>
        {publishTime && (
          <time dateTime={publishTime.toISOString()}>
            {format(publishTime, "d MMMM yyyy", { locale: sv })}
          </time>
        )}
        <span>
          {persons.map((person, index) => (
            <React.Fragment key={`person-${person.id}`}>
              {index !== 0 ? ", " : ""}
              {person.href ? <Link to={person.href}>{person.name}</Link> : person.name}
            </React.Fragment>
          ))}
        </span>
      </StyledHorizontal>
    )
  }
}
