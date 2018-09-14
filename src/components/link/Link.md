### Example

In this example we just change the color of the link but for React Router the provider value should
be `{linkComponent: Link, navLinkComponent: NavLink}` and for Gatsby
`{linkComponent: Link, navLinkComponent: Link}`.

```js
<Text>
  <ul>
    <li>
      <Link to="#link">Link</Link>
    </li>
    <li>
      <Link to="#">Nav Link</Link>
    </li>
    <LinkContext.Provider
      value={{
        linkComponent: ({ to, children }) => (
          <a href={to} style={{ color: colors.accent2 }}>
            {children}
          </a>
        ),
        navLinkComponent: ({ to, children }) => (
          <a href={to} style={{ color: colors.accent3 }}>
            {children}
          </a>
        )
      }}
    >
      <li>
        <Link to="#">Link (accent 2)</Link>
      </li>
      <li>
        <Link to="#" isActive={false}>
          Nav Link (accent 3)
        </Link>
      </li>
    </LinkContext.Provider>
  </ul>
</Text>
```
