### Example

```js
<Byline authors={[{ id: "lorem", name: "Lorem Ipsum" }]} publishTime={new Date("2018-01-01")} />
```

### Example with multiple authors and link

```js
<Byline
  authors={[{ id: "lorem", name: "Lorem Ipsum", href: "#" }, { id: "ipsum", name: "Ipsum Dolor" }]}
  publishTime={new Date("2018-01-01")}
/>
```
