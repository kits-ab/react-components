### Example

```js
<Wrapper style={{ backgroundColor: colors.primary, maxWidth: 300 }}>
  <p>Wrapper</p>
  <Breakout
    style={{
      backgroundColor: colors.accent1,
      paddingBottom: spacing.small,
      paddingTop: spacing.small
    }}
  >
    <Wrapper style={{ backgroundColor: colors.accent2, maxWidth: 400 }}>
      <p>Child 1</p>
    </Wrapper>
  </Breakout>
</Wrapper>
```
