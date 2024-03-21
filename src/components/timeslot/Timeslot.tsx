import { format } from "date-fns"
import { sv } from "date-fns/locale"
import { lighten } from "polished"
import React from "react"
import { styled } from "styled-components"

import {
  AirplaneIcon,
  AttachmentIcon,
  BoatIcon,
  BusIcon,
  CheckIcon,
  CoffeeIcon,
  DrinkIcon,
  FoodIcon,
  HotelIcon,
  LocationIcon,
  RunningIcon,
  SkiingIcon,
  TrainIcon,
  WorkshopIcon
} from "../../icons"
import { colors, fonts, spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { cssVar } from "../../utils/cssUtils"
import { Avatar } from "../avatar/Avatar"
import { Byline } from "../byline/Byline"
import { ContentHeading } from "../headings/content/ContentHeading"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Vertical } from "../layouts/vertical/Vertical"
import { Location } from "../location/Location"
import { Text } from "../text/Text"

type P = Partial<TimeslotProps>

const isPresentationType = (timeslotType: types.TimeslotType | undefined): boolean => {
  return (
    timeslotType === types.TimeslotType.Presentation ||
    timeslotType === types.TimeslotType.ExternalPresentation
  )
}

const StyledVertical = styled(Vertical).withConfig({
  shouldForwardProp: (prop) => !["connectToPrevious"].includes(prop)
})<P>`
  background-color: ${(props) =>
    isPresentationType(props.type) ? colors.background2 : colors.background5};
  background-color: ${(props) =>
    isPresentationType(props.type) ? "var(--background2)" : "var(--background5)"};
  border-radius: 5px;
  margin-top: ${(props) =>
    isPresentationType(props.type) ? spacing.large : spacing.medium}px !important;
  padding: ${spacing.medium}px ${spacing.huge}px;
  width: 100%;

  @media (max-width: ${width.mobileMenu}px) {
    padding: ${spacing.medium}px;
  }

  .Timeslot-times {
    font-family: ${fonts.thin};
    margin: 0 !important;
    position: relative;
    text-align: right;

    &::before {
      display: ${(props: P) => (props.connectToPrevious ? "block" : "none")};
      background-image: linear-gradient(
        to top,
        ${colors.background2} 0%,
        ${colors.background5} 100%
      );
      background-image: linear-gradient(to top, var(--background2) 0%, var(--background5) 100%);
      bottom: calc(100% + ${spacing.medium + 3}px);
      content: "";
      height: ${(props) =>
        isPresentationType(props.type) ? spacing.large - 3 : spacing.medium - 3}px;
      position: absolute;
      right: 23px;
      width: 3px;
      z-index: 3;
    }

    &::after {
      display: ${(props: P) => (props.connectToPrevious ? "block" : "none")};
      background-color: ${colors.background2};
      background-color: var(--background2);
      border: 3px solid ${colors.background1};
      border: 3px solid var(--background1);
      height: 14px;
      border-radius: 50%;
      content: "";
      position: absolute;
      right: 18px;
      top: -${spacing.medium + 7}px;
      width: 14px;
      z-index: 2;
    }
  }

  .Timeslot-start {
    color: ${colors.text1};
    color: var(--text1);
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
  }

  .Timeslot-end {
    color: ${colors.text2};
    color: var(--text2);
    font-size: 14px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: -5px;
  }

  .Timeslot-heading {
    color: ${colors.text1};
    color: var(--text1);

    .Timeslot-link {
      color: ${colors.link};
      color: var(--link);
    }
  }

  .Timeslot-header {
    container-type: inline-size;
  }

  .Timeslot-presenter {
    flex: 1 1 0%;

    @media (max-width: ${width.mobileMenu}px) {
      margin-right: -50px !important;
    }
  }

  .Timeslot-info {
    flex: 1 1 0%;

    svg {
      fill: ${lighten(0.1, "#c2c2be")};
      height: 20px;
      width: 20px;
    }

    .Timeslot-heading {
      font-size: 20px;
    }
  }
`

const StyledText = styled(Text)`
  border-top: 1px solid ${colors.background1};
  border-top: 1px solid var(--background1);
  margin: -15px -${spacing.huge}px 0;
  padding: 15px ${spacing.huge}px 0;

  @media (max-width: ${width.mobileMenu}px) {
    margin: -15px -${spacing.medium}px 0;
    padding: 15px ${spacing.medium}px 0;
  }
`

const StyledLocation = styled(Location)`
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  margin: ${spacing.medium}px -${spacing.huge}px -${spacing.medium}px;

  @media (max-width: ${width.mobileMenu}px) {
    margin: ${spacing.medium}px -${spacing.medium}px -${spacing.medium}px;
  }
`

const StyledAvatar = styled(Avatar)`
  margin: -30px ${spacing.medium}px 0 -${spacing.medium}px;

  @media (max-width: ${width.mobileMenu}px) {
    margin: -30px 0 ${spacing.medium}px 0;
  }
`

const StyledVideoContainer = styled.div`
  @media (max-width: ${width.mobileMenu}px) {
    background-color: green;
    height: 0;
    max-width: 350px;
    padding-bottom: ${(9 / 16) * 100}%;
    position: relative;

    > iframe {
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      width: 100%;
    }
  }
`

export type TimeslotProps = types.BaseProps & {
  /** More details about the timeslot. */
  children?: React.ReactNode | string
  /**
   * Set to `true` if the timeslot should be connected to the previous.
   * @default false
   */
  connectToPrevious?: boolean
  /** The time when the timeslot ends. */
  endTime: Date
  /** The heading of the timeslot. */
  heading: string
  /** The url to link to. */
  href?: string
  /** The presenters of the timeslot. */
  presenters?: types.Person[]
  /** The time when the timeslot starts. */
  startTime: Date
  /** The location of the timeslot. */
  location?: { coordinates: number[]; title?: string; subtitle?: string }
  /** The url to the presentation file of the timeslot. */
  presentation?: string
  /**
   * Set to `true` to show the end time of the timeslot.
   * @default false
   */
  showEndTime?: boolean
  /** The type of timeslot. */
  type: types.TimeslotType
  /** Id of a YouTube video to show. */
  youtubeId?: string
  /** Image of external presenter */
  externalPresenter?: types.ExternalPresenter
}

/**
 * Timeslot is used to show information about a specific timeslot. The information can be
 * information about a presentation, an activity or something else.
 */
export const Timeslot = ({
  children,
  endTime,
  heading,
  href,
  presenters,
  externalPresenter,
  location,
  presentation,
  youtubeId,
  showEndTime,
  startTime,
  type,
  ...restProps
}: TimeslotProps) => {
  const getIcon = (type?: types.TimeslotType) => {
    switch (type) {
      case types.TimeslotType.Airplane:
        return <AirplaneIcon />
      case types.TimeslotType.Boat:
        return <BoatIcon />
      case types.TimeslotType.Bus:
        return <BusIcon />
      case types.TimeslotType.CheckIn:
        return <CheckIcon />
      case types.TimeslotType.Coffee:
        return <CoffeeIcon />
      case types.TimeslotType.Drink:
        return <DrinkIcon />
      case types.TimeslotType.Food:
        return <FoodIcon />
      case types.TimeslotType.Hotel:
        return <HotelIcon />
      case types.TimeslotType.Location:
        return <LocationIcon />
      case types.TimeslotType.Running:
        return <RunningIcon />
      case types.TimeslotType.Skiing:
        return <SkiingIcon />
      case types.TimeslotType.Train:
        return <TrainIcon />
      case types.TimeslotType.Workshop:
        return <WorkshopIcon />
      default:
        return <LocationIcon />
    }
  }

  const renderInfoHeader = (type?: types.TimeslotType) => {
    return (
      <Horizontal className="Timeslot-info" spacing={spacing.medium}>
        <div>{getIcon(type)}</div>
        <ContentHeading className="Timeslot-heading">
          {href ? (
            <a className="Timeslot-link" href={href}>
              {heading}
            </a>
          ) : (
            heading
          )}
        </ContentHeading>
      </Horizontal>
    )
  }

  const renderPresentationHeader = () => {
    const tempPresenters: types.Person[] | types.ExternalPresenter[] | undefined =
      presenters && presenters.length > 0
        ? presenters
        : externalPresenter !== undefined && externalPresenter !== null
        ? [externalPresenter]
        : undefined

    return (
      <Horizontal breakpoint={width.mobileMenu} className="Timeslot-presenter">
        {/* TODO: Handle avatars for multiple presenters */}
        {tempPresenters && tempPresenters.length > 0 && (
          <StyledAvatar person={tempPresenters[0]} showFallback={true} width={80} />
        )}
        <Vertical>
          {tempPresenters && <Byline persons={tempPresenters} />}
          <ContentHeading className="Timeslot-heading">{heading}</ContentHeading>
        </Vertical>
      </Horizontal>
    )
  }
  return (
    <StyledVertical spacing={spacing.medium} tagName="section" type={type} {...restProps}>
      <Horizontal
        alignVertical={types.Alignment.Start}
        className="Timeslot-header"
        spacing={spacing.medium}
        tagName="header"
      >
        {isPresentationType(type) ? renderPresentationHeader() : renderInfoHeader(type)}
        <Vertical className="Timeslot-times">
          <div className="Timeslot-start">{format(startTime, "HH:mm", { locale: sv })}</div>
          {showEndTime && (
            <div className="Timeslot-end">– {format(endTime, "HH:mm", { locale: sv })}</div>
          )}
        </Vertical>
      </Horizontal>
      {children && <StyledText>{children}</StyledText>}
      {youtubeId && (
        <StyledVideoContainer>
          <iframe
            frameBorder="0"
            height="210"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            title="YouTube Video"
            width="350"
          />
        </StyledVideoContainer>
      )}
      {presentation && (
        <Text>
          <Horizontal alignVertical={types.Alignment.Center} spacing={spacing.small}>
            <AttachmentIcon fill={cssVar("--link")} height={16} width={16} />
            <p>
              <a href={presentation}>Ladda ner presentation</a>
            </p>
          </Horizontal>
        </Text>
      )}
      {location && <StyledLocation coordinates={location.coordinates} title={location.title} />}
    </StyledVertical>
  )
}
