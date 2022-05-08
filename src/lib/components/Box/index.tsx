import { styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";
import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

type HtmlBoxProps = {
  /**
   * allowed dynamic component types.
   * default is `div`;
   */
  as?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'nav' | 'section';
  /**
   * children
   */
  children: React.ReactNode;
}

type BoxProps = BackgroundProps
  & BorderProps
  & HtmlBoxProps
  & PositionProps
  & SpacingProps;

const allowedDynamicComponentTypes = [
  'article',
  'aside',
  'div',
  'footer',
  'header',
  'nav',
  'section',
];

const StyledBox = styled('div', {
  bg: '$gray100',
  borderRadius: '$sm',
});

const Box = ({ as = 'div', children, ...props }: BoxProps) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'div';

  return (
    <StyledBox
      as={componentType}
      css={{ ...convertCssProps(designSystemProps) }}
    >
      {children}
    </StyledBox>
  )
}

export default Box;
