### Example

```js
<Vertical style={{ height: 200 }}>
  <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
</Vertical>
```

### Example with different alignment

```js
<Vertical
  alignHorizontal={types.Alignment.Center}
  alignVertical={types.Alignment.End}
  style={{ height: 200 }}
>
  <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
</Vertical>
```

### Example with distributed height

```js
<Vertical distribute={true} style={{ height: 200 }}>
  <div style={{ backgroundColor: colors.primary, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, padding: spacing.small }}>Child 3</div>
</Vertical>
```

### Example with custom flexing

```js
<Vertical style={{ height: 200 }}>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Vertical>
```

### Example with spacing

```js
<Vertical distribute={true} spacing={spacing.small} style={{ height: 200 }}>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Vertical>
```

### Example with spacing and separator

```js
<Vertical distribute={true} separator={true} spacing={spacing.small / 2} style={{ height: 200 }}>
  <div style={{ backgroundColor: colors.primary, flex: 1, padding: spacing.small }}>Child 1</div>
  <div style={{ backgroundColor: colors.accent1, flex: 3, padding: spacing.small }}>Child 2</div>
  <div style={{ backgroundColor: colors.accent2, flex: 2, padding: spacing.small }}>Child 3</div>
</Vertical>
```
