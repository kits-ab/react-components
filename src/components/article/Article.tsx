import React from "react"
import styled from "styled-components"

import { spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { Avatar } from "../avatar/Avatar"
import { Byline } from "../byline/Byline"
import { ContentHeading } from "../headings/content/ContentHeading"
import { Link } from "../link/Link"
import { Text } from "../text/Text"

const StyledAvatar = styled(Avatar)`
  float: left;
  margin: -${spacing.medium}px ${spacing.medium}px 0 -${spacing.large}px;

  @media (max-width: ${width.mobile}px) {
    display: block;
    float: none;
    margin: 0 auto ${spacing.small}px;
  }
`

const StyledContentHeading = styled(ContentHeading)`
  @media (max-width: ${width.mobile}px) {
    text-align: center;
  }
`

const StyledByline = styled(Byline)`
  margin-bottom: ${spacing.large}px;
  margin-top: ${spacing.mini}px;

  @media (max-width: ${width.mobile}px) {
    justify-content: center;
  }
`

export type ArticleProps = types.BaseProps & {
  /** The authors of the article. */
  authors: types.Person[]
  /** The actual content of the article. */
  children: React.ReactNode | string
  /** The heading of the article. */
  heading: string
  /**
   * The href of the page to link the heading to. This is normally used to link to the full article
   * from the excerpt.
   */
  href?: string
  /** The time when the article was published. */
  publishTime: Date
  /**
   * Set to `true` to show the avatars of the authors.
   * @default false
   */
  showAvatars?: boolean
  /**
   * Set to `true` to indicate that the content only shows an excerpt from the article.
   * @default false
   */
  showExcerpt?: boolean
}

/**
 * Article is used to show an article, or an excerpt from an article, together with a header
 * containing information about the authors and publish time.
 */
export const Article = ({
  authors,
  children,
  heading,
  href,
  publishTime,
  showAvatars = false,
  showExcerpt = false,
  ...restProps
}: ArticleProps) => {
  return (
    <article {...restProps}>
      <header>
        {/* TODO: Handle avatars for multiple authors */}
        {showAvatars && authors.length > 0 && (
          <StyledAvatar person={authors[0]} showFallback={true} />
        )}
        <StyledContentHeading>
          {href ? <Link to={href}>{heading}</Link> : { heading }}
        </StyledContentHeading>
        <div>
          <StyledByline persons={authors} publishTime={publishTime} />
        </div>
      </header>
      <Text>{children}</Text>
      {showExcerpt && href && (
        <Text>
          <p>
            <Link to={href}>Läs mer →</Link>
          </p>
        </Text>
      )}
    </article>
  )
}
