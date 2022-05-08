type ParseArrKeyParToObj =  (arr: Array<[string, string]>) => Record<string, string>;

const parseArrKeyParToObj: ParseArrKeyParToObj = (arr) =>  (
  arr.reduce((acc, [key, value]) => ({...acc, [key]: value}), {})
);

export default parseArrKeyParToObj;
