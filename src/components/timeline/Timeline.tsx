import {
  addMonths,
  addYears,
  differenceInDays,
  isBefore,
  parse,
  startOfYear,
  subMonths
} from "date-fns"
import * as React from "react"
import styled from "styled-components"

import { Link } from "../link/Link"
import { LocationIcon } from "../../icons"
import { colors, fonts } from "../../styles/constants"
import * as types from "../../types"

const StyledDiv = styled.div`
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

interface TimelineEvent {
  href: string
  date: string
}

export interface TimelineProps extends types.BaseProps {
  /** The events to show in the timeline. */
  events: TimelineEvent[]
}

/**
 * Timeline is used to show a list of events in a timeline.
 */
export class Timeline extends React.PureComponent<TimelineProps> {
  render() {
    const markers = this.getMarkers()
    return (
      <StyledDiv>
        {markers.events.map(event => (
          <Link
            activeClassName="is-active"
            className="Timeline-link"
            style={{ left: `${event.position}%` }}
            to={event.href}
          >
            <LocationIcon />
          </Link>
        ))}
        {markers.years.map(year => (
          <div className="Timeline-year" style={{ left: `${year.position}%` }}>
            <div>{year.date.getFullYear()}</div>
          </div>
        ))}
      </StyledDiv>
    )
  }

  private getMarkers = () => {
    const sortedEvents = this.props.events
      .sort((event1: TimelineEvent, event2: TimelineEvent) =>
        event1.date.localeCompare(event2.date)
      )
      .map(event => ({ href: event.href, date: parse(event.date) }))

    if (sortedEvents.length > 0) {
      const minDate = subMonths(sortedEvents[0].date, 2)
      const maxDate = addMonths(sortedEvents[sortedEvents.length - 1].date, 2)
      const interval = differenceInDays(minDate, maxDate)

      const events = sortedEvents.map(event => ({
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
}
