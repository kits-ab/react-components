<div style="color: #767676; font-family: Consolas, 'Liberation Mono', Menlo, monospace; font-size: 13px; margin-bottom: 24px;">
  import { DevelopmentIcon } from "@kokitotsos/react-components"
</div>

All icons that can be used.

### Available icons

```js
const StyledHorizontal = styled(Horizontal)`
  margin: 0 ${-spacing.medium / 2}px;

  > * {
    flex: 0 1 calc(${100 / 3}% - ${spacing.medium}px);
    margin-left: ${spacing.medium / 2}px;
    margin-right: ${spacing.medium / 2}px;
    margin-bottom: ${spacing.medium / 2}px;
    margin-top: ${spacing.medium / 2}px;

    @media (max-width: 1200px) {
      flex: 0 1 calc(${100 / 2}% - ${spacing.medium}px);
    }

    @media (max-width: 900px) {
      flex: 0 1 calc(100% - ${spacing.medium}px);
    }
  }
`

var StyledDiv = styled.div`
  background-color: ${colors.background2};
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border: 5px solid white;
  
  .icons-icon {
      padding: ${spacing.medium}px;
  }
  
  .icons-name {
      background-color: rgba(255, 255, 255, 0.6);
      font-family: Consolas, 'Liberation Mono', Menlo, monospace;
      font-size: 13px;
      flex: 1;
      line-height: 40px;
      padding: ${spacing.medium}px;
      vertical-align: middle;
    }
  }
`
;<StyledHorizontal wrapRows={true}>
  {Object.keys(icons).map(icon => (
    <StyledDiv>
      <Horizontal alignVertical={types.Alignment.Center}>
        <div className="icons-icon">
          {new icons[icon]({ fill: "#000", height: 32, width: 32 }).render()}
        </div>
        <div className="icons-name">{`<${icon}/>`}</div>
      </Horizontal>
    </StyledDiv>
  ))}
</StyledHorizontal>
```
