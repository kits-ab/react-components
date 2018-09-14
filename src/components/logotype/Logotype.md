### Examples

```js
<Horizontal separator={true} spacing={spacing.medium}>
  <Logotype />
  <Logotype color={colors.primary} />
  <Logotype color={colors.accent1} />
  <Logotype color={colors.accent2} />
  <Logotype color={colors.accent3} />
</Horizontal>
```

### Examples with tagline

```js
<Horizontal separator={true} spacing={spacing.medium}>
  <Logotype showTagline={true} width={250} />
  <Logotype color={colors.primary} showTagline={true} width={250} />
</Horizontal>
```
