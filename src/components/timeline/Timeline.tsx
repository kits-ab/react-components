import {
  addMonths,
  addYears,
  differenceInDays,
  isBefore,
  parseISO,
  startOfYear,
  subMonths
} from "date-fns"
import React from "react"
import { styled } from "styled-components"

import { LocationIcon } from "../../icons"
import { colors, fonts } from "../../styles/constants"
import * as types from "../../types"
import { Link } from "../link/Link"

const StyledDiv = styled.div`
  background-color: ${colors.line};
  background-color: var(--line);
  height: 1px;
  margin: 30px 0;
  position: relative;

  .Timeline-link {
    bottom: -5px;
    cursor: pointer;
    margin-left: -18px;
    padding: 10px;
    position: absolute;

    &::before {
      background-color: ${colors.primary};
      background-color: var(--primary);
      border-radius: 1px;
      bottom: 4px;
      content: "";
      height: 0;
      transition: height 0.2s;
      left: 0;
      position: absolute;
      right: 0;
    }

    > svg {
      fill: ${colors.text2};
      fill: var(--text2);
      height: 16px;
      transition: transform 0.2s;
      transform-origin: 50% 100%;
      width: 16px;

      &:hover {
        transform: scale(1.5);
      }
    }

    &.is-active {
      > svg {
        transform: scale(1.5);
      }

      &::before {
        height: 3px;
      }
    }
  }

  .Timeline-year {
    color: ${colors.text2};
    color: var(--text2);
    font-family: ${fonts.thin};
    font-size: 16px;
    font-style: normal;
    font-weight: 200;
    position: absolute;
    top: 10px;

    div {
      left: -50%;
      position: relative;
    }

    &::before {
      background-color: ${colors.line};
      background-color: var(--line);
      content: "";
      height: 8px;
      left: 0;
      position: absolute;
      top: -10px;
      width: 1px;
    }
  }
`

type TimelineEvent = {
  href: string
  date: string
}

export type TimelineProps = types.BaseProps & {
  /** The events to show in the timeline. */
  events: TimelineEvent[]
}

/**
 * Timeline is used to show a list of events in a timeline.
 */
export const Timeline = ({ events, ...restProps }: TimelineProps) => {
  const getMarkers = () => {
    const sortedEvents = events
      .sort((event1: TimelineEvent, event2: TimelineEvent) =>
        event1.date.localeCompare(event2.date)
      )
      .map((event) => ({ href: event.href, date: parseISO(event.date) }))

    if (sortedEvents.length > 0) {
      const minDate = subMonths(sortedEvents[0].date, 2)
      const maxDate = addMonths(sortedEvents[sortedEvents.length - 1].date, 2)
      const interval = differenceInDays(minDate, maxDate)

      const events = sortedEvents.map((event) => ({
        ...event,
        position: (differenceInDays(minDate, event.date) / interval) * 100
      }))

      const years = []
      let date = startOfYear(addYears(minDate, 1))
      while (isBefore(date, maxDate)) {
        years.push({ date, position: (differenceInDays(minDate, date) / interval) * 100 })
        date = addYears(date, 1)
      }
      return { events, years }
    } else {
      return {
        events: [],
        years: []
      }
    }
  }
  const markers = getMarkers()
  return (
    <StyledDiv {...restProps}>
      {markers.events.map((event, index) => (
        <Link
          activeClassName="is-active"
          className="Timeline-link"
          key={"link" + index}
          style={{ left: `${event.position}%` }}
          to={event.href}
        >
          <LocationIcon />
        </Link>
      ))}
      {markers.years.map((year, index) => (
        <div className="Timeline-year" key={"year" + index} style={{ left: `${year.position}%` }}>
          <div>{year.date.getFullYear()}</div>
        </div>
      ))}
    </StyledDiv>
  )
}
