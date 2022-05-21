
const parseArrToStr = (arr?: unknown[], separator?: string) =>
arr?.reduce(
  (prevStr, currValue) => `${prevStr}${separator}${currValue}`,
  '',
) as string ?? '';

export default  parseArrToStr;
