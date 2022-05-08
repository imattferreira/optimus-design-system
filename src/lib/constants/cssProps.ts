const borderWidthPropNames = [
  'borderWidth',
  'borderTopWidth',
  'borderBottomWidth',
  'borderRightWidth',
  'borderLeftWidth',
];
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
const fontPropNames = ['fontWeight'];
const marginPropNames = ['m', 'mt', 'mb', 'ml', 'mr', 'spacing'];
const paddingPropNames = ['p', 'pt', 'pb', 'pl', 'pr'];
const radiiPropNames = [
  'borderRadius',
  'borderBottomLeftRadius',
  'borderBottomRightRadius',
  'borderTopLeftRadius',
  'borderTopRightRadius',
];
const zIndexPropNames = ['zIndex'];

export const cssPropsThatHaveTokens = [
  borderWidthPropNames,
  colorPropNames,
  fontPropNames,
  marginPropNames,
  paddingPropNames,
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
  'display'
];

export default cssProps;
