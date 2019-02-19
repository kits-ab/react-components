export const cssVar = (varName: string) => {
  if (typeof window === "undefined") {
    return undefined
  } else {
    return getComputedStyle(document.body).getPropertyValue(varName)
  }
}
