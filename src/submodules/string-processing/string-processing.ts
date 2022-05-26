//First letter
export const upperFirstLetter = (text: string): string => {
  if (text.length <= 1)
    return text.toUpperCase()
  return text[0].toLocaleUpperCase() + text.substring(1)
}