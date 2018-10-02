export const cssVar = (varName: string) => {
  return getComputedStyle(document.body).getPropertyValue(varName)
}
