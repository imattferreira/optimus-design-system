import { forwardRef } from "react";

import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomBoxProps = {
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
  & CustomBoxProps
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

const Box = forwardRef(({ as = 'div', children, ...props }: BoxProps, ref) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'div';

  return (
    <StyledBox
      ref={ref as any}
      as={componentType}
      css={{ ...convertCssProps(designSystemProps) }}
    >
      {children}
    </StyledBox>
  )
})

export default Box;
