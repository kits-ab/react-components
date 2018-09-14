### Example

```js
<Horizontal>
  <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
</Horizontal>
```

### Example with different alignment

```js
<Horizontal alignHorizontal={types.Alignment.End} alignVertical={types.Alignment.Center}>
  <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>
    Child 1.1
    <br />
    Child 1.2
    <br />
    Child 1.3
  </div>
  <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>
    Child 3.1
    <br />
    Child 3.2
  </div>
</Horizontal>
```

### Example with distributed width

```js
<Horizontal distribute={true}>
  <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
</Horizontal>
```

### Example with custom flexing

```js
<Horizontal>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Horizontal>
```

### Example with spacing

```js
<Horizontal distribute={true} spacing={spacing.small}>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Horizontal>
```

### Example with spacing and separator

```js
<Horizontal distribute={true} separator={true} spacing={spacing.small / 2}>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Horizontal>
```

### Example with wrapping of overflowing child components

_Note that spacing should be done manually._

```js
const style = { margin: spacing.small / 2, minWidth: 300, padding: spacing.small }
;<Horizontal distribute={true} style={{ margin: -spacing.small / 2 }} wrapRows={true}>
  <div style={{ backgroundColor: colors.primary, ...style }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, ...style }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, ...style }}>Child 3</div>
  <div style={{ backgroundColor: colors.accent3, ...style }}>Child 4</div>
  <div style={{ backgroundColor: colors.background2, ...style }}>Child 5</div>
</Horizontal>
```

### Example with breakpoint

```js
<Horizontal breakpoint={width.tablet} separator={true} spacing={spacing.small / 2}>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Horizontal>
```
