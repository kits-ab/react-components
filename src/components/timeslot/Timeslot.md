### Examples

```js
<Vertical>
  <Timeslot
    heading="Airplane"
    startTime={new Date("2018-01-01T08:00:00")}
    endTime={new Date("2018-01-01T08:30:00")}
    type={types.TimeslotType.Airplane}
  />
  <Timeslot
    heading="Boat"
    startTime={new Date("2018-01-01T08:30:00")}
    endTime={new Date("2018-01-01T09:00:00")}
    type={types.TimeslotType.Boat}
    connectToPrevious={true}
  />
  <Timeslot
    heading="Bus"
    startTime={new Date("2018-01-01T09:00:00")}
    endTime={new Date("2018-01-01T09:30:00")}
    type={types.TimeslotType.Bus}
    connectToPrevious={true}
  />
  <Timeslot
    heading="CheckIn"
    startTime={new Date("2018-01-01T09:30:00")}
    endTime={new Date("2018-01-01T10:00:00")}
    type={types.TimeslotType.CheckIn}
    connectToPrevious={true}
  />
  <Timeslot
    heading="Coffee"
    startTime={new Date("2018-01-01T10:00:00")}
    endTime={new Date("2018-01-01T10:30:00")}
    type={types.TimeslotType.Coffee}
    connectToPrevious={true}
    showEndTime={true}
  />
  <Timeslot
    heading="Drink"
    startTime={new Date("2018-01-01T11:00:00")}
    endTime={new Date("2018-01-01T11:30:00")}
    type={types.TimeslotType.Drink}
  />
  <Timeslot
    heading="Food"
    startTime={new Date("2018-01-01T11:30:00")}
    endTime={new Date("2018-01-01T12:00:00")}
    type={types.TimeslotType.Food}
    connectToPrevious={true}
  />
  <Timeslot
    heading="Hotel"
    startTime={new Date("2018-01-01T12:00:00")}
    endTime={new Date("2018-01-01T12:30:00")}
    type={types.TimeslotType.Hotel}
    connectToPrevious={true}
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Timeslot>
  <Timeslot
    heading="Location"
    startTime={new Date("2018-01-01T12:30:00")}
    endTime={new Date("2018-01-01T13:00:00")}
    type={types.TimeslotType.Location}
    location={{ coordinates: [57.7001813, 11.9567863], title: "Location" }}
    connectToPrevious={true}
  />
  <Timeslot
    presenters={[{ id: "lorem", href: "#", name: "Lorem Ipsum", avatarSrc: "/avatar.jpg" }]}
    heading="Lorem ipsum dolor sit amet"
    href="#"
    startTime={new Date("2018-01-01T13:00:00")}
    endTime={new Date("2018-01-01T13:30:00")}
    type={types.TimeslotType.Presentation}
    connectToPrevious={true}
    presentation="#"
    youtubeId="0CcnAIuCfSU"
  >
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </Timeslot>
  <Timeslot
    heading="Running"
    startTime={new Date("2018-01-01T13:30:00")}
    endTime={new Date("2018-01-01T14:00:00")}
    type={types.TimeslotType.Running}
    connectToPrevious={true}
  />
  <Timeslot
    heading="Skiing"
    startTime={new Date("2018-01-01T14:00:00")}
    endTime={new Date("2018-01-01T14:30:00")}
    type={types.TimeslotType.Skiing}
    connectToPrevious={true}
    showEndTime={true}
  />
  <Timeslot
    heading="Workshop"
    startTime={new Date("2018-01-01T15:00:00")}
    endTime={new Date("2018-01-01T15:30:00")}
    type={types.TimeslotType.Workshop}
    connectToPrevious={false}
    showEndTime={true}
  />
</Vertical>
```
