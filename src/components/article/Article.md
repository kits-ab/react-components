### Example with avatar and full text

```js
<Article
  authors={[{ id: "lorem", name: "Lorem Ipsum" }]}
  heading="Lorem ipsum dolor sit amet"
  href="#"
  publishTime={new Date("2018-01-01")}
  showAvatars={true}
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
</Article>
```

### Example with excerpt and multiple authors

```js
<Article
  authors={[
    { id: "lorem", name: "Lorem Ipsum", href: "#" },
    { id: "ipsum", name: "Ipsum Dolor" },
    { id: "dolor", name: "Dolor Sit" },
    { id: "sit", name: "Sit Amet" }
  ]}
  heading="Lorem ipsum dolor sit amet"
  href="#"
  publishTime={new Date("2018-01-01")}
  showExcerpt={true}
>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
    labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
</Article>
```
