<div style="color: #767676; font-family: Consolas, 'Liberation Mono', Menlo, monospace; font-size: 13px; margin-bottom: 24px;">
  import { colors } from "@kokitotsos/react-components"
</div>

All colors that can be used.

```js
const StyledHorizontal = styled(Horizontal)`
  margin: ${-spacing.medium / 2}px;

  > * {
    flex: 0 1 calc(${100 / 4}% - ${spacing.medium}px);
    margin-left: ${spacing.medium / 2}px;
    margin-right: ${spacing.medium / 2}px;
    margin-bottom: ${spacing.medium / 2}px;
    margin-top: ${spacing.medium / 2}px;

    @media (max-width: 1000px) {
      flex: 0 1 calc(${100 / 3}% - ${spacing.medium}px);
    }

    @media (max-width: 800px) {
      flex: 0 1 calc(${100 / 2}% - ${spacing.medium}px);
    }

    @media (max-width: 500px) {
      flex: 0 1 calc(100% - ${spacing.medium}px);
    }
  }
`

var StyledDiv = styled.div`
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2);
  border: 5px solid white;
  display: block;
  height: 150px;
  padding: 30px;
  position: relative;
  
  .colors-info {
      background-color: rgba(255, 255, 255, 0.93);
      bottom: 0;
      font-family: ${fonts.light};
      font-style: normal;
      font-weight: 300;
      left: 0;
      line-height: 1.4;
      position: absolute;
      padding: ${spacing.small}px;
      right: 0;
    }
  
    .colors-name {
      color: ${colors.text1};
      margin-bottom: 0;
      margin-top: 0;
      text-align: left;
    }
  
    .colors-value {
      color: ${colors.text2};
      font-size: 14px;
      margin-bottom: 0;
      margin-top: 0;
      text-align: left;
    }
  }
`
;<StyledHorizontal wrapRows={true}>
  {Object.keys(colors).map(color => (
    <StyledDiv key={color} style={{ backgroundColor: colors[color] }}>
      <div className="colors-info">
        <p className="colors-name">{`colors.${color}`}</p>
        <p className="colors-value">{colors[color]}</p>
      </div>
    </StyledDiv>
  ))}
</StyledHorizontal>
```
