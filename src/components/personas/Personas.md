### Examples

```js
initialState = { active: 1 }
;<Personas>
  <Persona
    isActive={state.active === 1}
    onClick={() => setState({ active: 1 })}
    icon="https://kits.se/images/jobb/person1@2x.png"
    name="Lorem Ipsum 1"
  >
    <Text>
      <h3>Lorem Ipsum 1</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Text>
  </Persona>
  <Persona
    isActive={state.active === 2}
    onClick={() => setState({ active: 2 })}
    icon="https://kits.se/images/jobb/person2@2x.png"
    name="Lorem Ipsum 2"
  >
    <Text>
      <h3>Lorem Ipsum 2</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Text>
  </Persona>
  <Persona
    isActive={state.active === 3}
    onClick={() => setState({ active: 3 })}
    icon="https://kits.se/images/jobb/person3@2x.png"
    name="Lorem Ipsum 3"
  >
    <Text>
      <h3>Lorem Ipsum 3</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
    </Text>
  </Persona>
</Personas>
```
