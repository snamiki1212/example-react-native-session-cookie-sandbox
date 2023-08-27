
const key = "session";

export const extractSessionId = (str: string | null): number => {
  const num = 0;
  if (!str) return num
  const regex = new RegExp(`${key}=([^;]+)`)
  const result = str.match(regex)
  if (!result) return num;
  const val = result[1];
  const maybeNum = parseInt(val);
  if (isNaN(maybeNum)) return num;
  return maybeNum;
}

export const buildNextSessionId = (num: number): string => {
  return `${key}=${num + 1}; `
};