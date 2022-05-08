import type { ButtonHTMLAttributes } from "react";

import { styled, config } from "../styles";

interface MarginProps {
  m?: keyof typeof config.theme.space,
  mt?: keyof typeof config.theme.space,
  mb?: keyof typeof config.theme.space,
  ml?: keyof typeof config.theme.space,
  mr?: keyof typeof config.theme.space,
}

interface PaddingProps {
  p?: keyof typeof config.theme.space,
  pt?: keyof typeof config.theme.space,
  pb?: keyof typeof config.theme.space,
  pl?: keyof typeof config.theme.space,
  pr?: keyof typeof config.theme.space,
}

interface BackgroundProps {
  bg?: keyof typeof config.theme.colors;
}

interface PositionProps {
  zIndex?: keyof typeof config.theme.zIndices;
}

interface FontProps {
  fontSize?: keyof typeof config.theme.sizes;
  color?: keyof typeof config.theme.colors;
}

type ButtonProps = MarginProps & PaddingProps & FontProps & BackgroundProps & PositionProps & ButtonHTMLAttributes<HTMLButtonElement>;

const StyledButton = styled('button', {
  p: '$2 $4',
  bg: '$purple400',
  fontWeight: 400,
  color: '$gray100',
  border: 'none',
  borderRadius: '$base',

  '&:hover': {
    background: '$purple300',
  }
});

const marginPropNames = ['m', 'mt', 'mb', 'ml', 'mr'];
const paddingPropNames = ['p', 'pt', 'pb', 'pl', 'pr'];
const colorPropNames = ['bg', 'color'];
const borderWidthPropNames = ['border'];
const radiiPropNames = ['borderRadius'];
const zIndexPropNames = ['zIndex'];

const cssPropsThatHaveTokens = [
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

type SplitReactPropsOfDesignSystem<T = Record<string, string>> = (props: T) => {
  reactProps: Record<string, string>,
  designSystemProps: Record<string, string>
};

type ParseArrKeyParToObj =  (arr: Array<[string, string]>) => Record<string, string>;

type ConvertCssProps<T = Record<string, string>> = (props: T) => Record<string, string>;

const parseArrKeyParToObj: ParseArrKeyParToObj = (arr) =>  arr.reduce((acc, [key, value]) => ({...acc, [key]: value}), {});

const splitReactPropsOfDesignSystem: SplitReactPropsOfDesignSystem = (props) =>  {
  const propsKeyPar =  Object.entries(props);

  const designSystemProps = parseArrKeyParToObj(
    propsKeyPar.filter(([key]) => cssProps.includes(key))
  );

  const reactProps = parseArrKeyParToObj(
    propsKeyPar.filter(([key]) => !cssProps.includes(key))
  );

  return { designSystemProps, reactProps };
}

const convertCssProps: ConvertCssProps<T> = <T,>(props: T) =>
   Object.entries(props).reduce((acc, [key, value]) => (
    cssPropsThatHaveTokens.includes(key)
      ? { ...acc, [key]: `$${value}` }
      : { ...acc, key: value }
  ), {});

function Button({ children, ...rest }: ButtonProps) {
  splitReactPropsOfDesignSystem(rest);

  return <StyledButton css={{...convertCssProps(rest)}}>{children}</StyledButton>
}

export default Button;
