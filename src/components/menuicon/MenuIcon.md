### Example

```js
initialState = { isOpen: false }
;<MenuIcon
  isFloating={false}
  isOpen={state.isOpen}
  onClick={() => setState({ isOpen: !state.isOpen })}
/>
```

### Example with a floating icon

```js
initialState = { isFloating: false, isOpen: false }
;<Horizontal spacing={spacing.small}>
  <Button onClick={() => setState({ isFloating: !state.isFloating })}>Toggle floating</Button>
  <MenuIcon
    isFloating={state.isFloating}
    isOpen={state.isOpen}
    onClick={() => setState({ isOpen: !state.isOpen })}
  />
</Horizontal>
```
