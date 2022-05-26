/**
 * Return string of className list seperated by white space
 * @param classes className string list
 */
export const combineCN = (
  ...classes: (string | undefined)[]
): string | undefined => {
  let result = classes
    .filter((val) => { return val !== undefined && val !== null && val !== "" })
    .join(" ")
  return result === "" ? undefined : result
};