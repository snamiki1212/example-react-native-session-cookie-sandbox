export const extractSessionId = (str: string | null, regex: RegExp): number => {
  const num = 0;
  if (!str) return num
  const result = str.match(regex)
  if (!result) return num;
  const val = result[1];
  const maybeNum = parseInt(val);
  if (isNaN(maybeNum)) return num;
  return maybeNum;
}