const marginPropNames = ['m', 'mt', 'mb', 'ml', 'mr'];
const paddingPropNames = ['p', 'pt', 'pb', 'pl', 'pr'];
const colorPropNames = ['bg', 'color'];
const borderWidthPropNames = ['border'];
const radiiPropNames = ['borderRadius'];
const zIndexPropNames = ['zIndex'];

export const cssPropsThatHaveTokens = [
  marginPropNames,
  paddingPropNames,
  colorPropNames,
  borderWidthPropNames,
  radiiPropNames,
  zIndexPropNames,
].flat();

const cssProps = [
  ...cssPropsThatHaveTokens,
  'position',
  'top',
  'bottom',
  'left',
  'right',
  'inset',
];

export default cssProps;
