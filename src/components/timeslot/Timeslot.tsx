import { format } from "date-fns"
import * as svLocale from "date-fns/locale/sv"
import { lighten } from "polished"
import * as React from "react"
import styled from "styled-components"

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
  WorkshopIcon
} from "../../icons"
import { colors, fonts, spacing, width } from "../../styles/constants"
import * as types from "../../types"
import { Avatar } from "../avatar/Avatar"
import { Byline } from "../byline/Byline"
import { ContentHeading } from "../headings/content/ContentHeading"
import { Horizontal } from "../layouts/horizontal/Horizontal"
import { Vertical } from "../layouts/vertical/Vertical"
import { Location } from "../location/Location"
import { Text } from "../text/Text"

type P = Partial<TimeslotProps>

const StyledVertical = styled(Vertical)`
  background-color: ${props =>
    props.type === types.TimeslotType.Presentation
      ? colors.background2
      : lighten(0.03, colors.background2)};
  border-radius: 5px;
  margin-top: ${props =>
    props.type === types.TimeslotType.Presentation ? spacing.large : spacing.medium}px !important;
  padding: ${spacing.medium}px ${spacing.huge}px;

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
        ${lighten(0.03, colors.background2)} 100%
      );
      bottom: calc(100% + ${spacing.medium + 3}px);
      content: "";
      height: ${props =>
        props.type === types.TimeslotType.Presentation ? spacing.large - 3 : spacing.medium - 3}px;
      position: absolute;
      right: 23px;
      width: 3px;
      z-index: 3;
    }

    &::after {
      display: ${(props: P) => (props.connectToPrevious ? "block" : "none")};
      background-color: ${colors.background2};
      border: 3px solid ${colors.background1};
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
    font-size: 20px;
    font-style: normal;
    font-weight: 200;
  }

  .Timeslot-end {
    color: ${colors.text2};
    font-size: 14px;
    font-style: normal;
    font-weight: 200;
    margin-bottom: -5px;
  }

  .Timeslot-heading {
    color: ${colors.text1};
  }

  .Timeslot-presenter {
    flex: 1;

    @media (max-width: ${width.mobileMenu}px) {
      margin-right: -50px !important;
    }
  }

  .Timeslot-info {
    flex: 1;

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

export interface TimeslotProps extends types.BaseProps {
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
  location?: string
  /** The url to the presentation file of the timeslot. */
  presentation?: string
  /**
   * Set to `true` to show the end time of the timeslot.
   * @default false
   */
  showEndTime?: boolean
  /** The type of timeslot. */
  type: types.TimeslotType
}

/**
 * Timeslot is used to show information about a specific timeslot. The information can be
 * information about a presentation, an activity or something else.
 */
export class Timeslot extends React.PureComponent<TimeslotProps> {
  render() {
    const {
      children,
      endTime,
      location,
      presentation,
      showEndTime,
      startTime,
      type,
      ...restProps
    } = this.props
    return (
      <StyledVertical spacing={spacing.medium} tagName="section" type={type} {...restProps}>
        <Horizontal
          alignVertical={types.Alignment.Start}
          className="Timeslot-header"
          spacing={spacing.medium}
          tagName="header"
        >
          {type === types.TimeslotType.Presentation
            ? this.renderPresentationHeader()
            : this.renderInfoHeader(type)}
          <Vertical className="Timeslot-times">
            <div className="Timeslot-start">{format(startTime, "HH:mm", { locale: svLocale })}</div>
            {showEndTime && (
              <div className="Timeslot-end">– {format(endTime, "HH:mm", { locale: svLocale })}</div>
            )}
          </Vertical>
        </Horizontal>
        {children && <StyledText>{children}</StyledText>}
        {presentation && (
          <Text>
            <Horizontal alignVertical={types.Alignment.Center} spacing={spacing.small}>
              <AttachmentIcon fill={colors.link} height={16} width={16} />
              <p>
                <a href={presentation}>Ladda ner presentation</a>
              </p>
            </Horizontal>
          </Text>
        )}
        {location && <StyledLocation />}
      </StyledVertical>
    )
  }

  private getIcon = (type?: types.TimeslotType) => {
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
      case types.TimeslotType.Workshop:
        return <WorkshopIcon />
      default:
        return <LocationIcon />
    }
  }

  private renderInfoHeader = (type?: types.TimeslotType) => {
    const { heading } = this.props
    return (
      <Horizontal className="Timeslot-info" spacing={spacing.medium}>
        <div>{this.getIcon(type)}</div>
        <ContentHeading className="Timeslot-heading">{heading}</ContentHeading>
      </Horizontal>
    )
  }

  private renderPresentationHeader = () => {
    const { presenters, heading } = this.props
    return (
      <Horizontal breakpoint={width.mobileMenu} className="Timeslot-presenter">
        {/* TODO: Handle avatars for multiple presenters */}
        {presenters &&
          presenters.length > 0 && (
            <StyledAvatar person={presenters[0]} showFallback={true} width={80} />
          )}
        <Vertical>
          {presenters && <Byline persons={presenters} />}
          <ContentHeading className="Timeslot-heading">{heading}</ContentHeading>
        </Vertical>
      </Horizontal>
    )
  }
}
