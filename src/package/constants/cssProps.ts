const marginPropNames = ['m', 'mt', 'mb', 'ml', 'mr'];
const paddingPropNames = ['p', 'pt', 'pb', 'pl', 'pr'];
const colorPropNames = [
  'bg',
  'bgHover',
  'color',
  'borderColor',
  'borderTopColor',
  'borderBottomColor',
  'borderLeftColor',
  'borderRightColor',
];
const borderWidthPropNames = [
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderRightWidth',
  'borderLeftWidth',
];
const radiiPropNames = [
  'borderRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
];
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
