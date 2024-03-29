import React from "react"
import { styled } from "styled-components"

import { colors, fonts, spacing } from "../../styles/constants"
import * as types from "../../types"
import { SubHeading } from "../headings/sub/SubHeading"
import { Vertical } from "../layouts/vertical/Vertical"
import { Social } from "../social/Social"

const StyledVertical = styled(Vertical)`
  .contact-social:not(:first-child) {
    margin-top: 15px;
  }
`

const StyledSubHeading = styled(SubHeading)`
  white-space: nowrap;
`

const StyledP = styled.p`
  margin: 0;

  > span {
    color: ${colors.text1};
    color: var(--text1);
    display: block;
    font-family: ${fonts.light};
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 1.4;

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

export type ContactProps = types.BaseProps & {
  /** The contact information to show. */
  info: types.Contact
  /** The type of contact information to show. This determines which fields to show. */
  type: types.ContactType
}

/**
 * Contact is used to show some kind of contact information.
 */
export const Contact = ({ info, type, ...restProps }: ContactProps) => {
  const renderCompanyContact = () => {
    const { name, street, postalCode, city, phone, email } = info
    return (
      <>
        {name && <SubHeading>{name}</SubHeading>}
        {(street || postalCode || city) && (
          <StyledP>
            {street && <span>{street}</span>}
            {(postalCode || city) && (
              <span>
                {postalCode && postalCode.toString()} {city}
              </span>
            )}
          </StyledP>
        )}
        {(phone || email) && (
          <StyledP>
            {phone && (
              <span>
                <a href={phone.toLink()}>{phone.toString()}</a>
              </span>
            )}
            {email && (
              <span>
                <a href={email.toLink()}>{email.toString()}</a>
              </span>
            )}
          </StyledP>
        )}
      </>
    )
  }

  const renderPersonContact = () => {
    const { phone, email } = info
    return (
      <>
        {(phone || email) && (
          <StyledP>
            {phone && (
              <span>
                <a href={phone.toLink()}>{phone.toString()}</a>
              </span>
            )}
            {email && (
              <span>
                <a href={email.toLink()}>{email.toString()}</a>
              </span>
            )}
          </StyledP>
        )}
      </>
    )
  }

  const renderRoleContact = () => {
    const { role, name, phone, email } = info
    return (
      <>
        {role && <StyledSubHeading>{role}</StyledSubHeading>}
        {(name || phone || email) && (
          <StyledP>
            {name && <span>{name}</span>}
            {phone && (
              <span>
                <a href={phone.toLink()}>{phone.toString()}</a>
              </span>
            )}
            {email && (
              <span>
                <a href={email.toLink()}>{email.toString()}</a>
              </span>
            )}
          </StyledP>
        )}
      </>
    )
  }

  return (
    <StyledVertical spacing={spacing.small} {...restProps} tagName="address">
      {type === types.ContactType.Company && renderCompanyContact()}
      {type === types.ContactType.Person && renderPersonContact()}
      {type === types.ContactType.Role && renderRoleContact()}
      {type !== types.ContactType.Role && info.social && (
        <Social className="contact-social" info={info.social} />
      )}
    </StyledVertical>
  )
}
