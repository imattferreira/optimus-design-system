import { forwardRef } from "react";

import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  PositionProps,
  SpacingProps
} from "../../types/CssProps";

type CustomFlexProps = {
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

type FlexProps = BackgroundProps
  & BorderProps
  & DisplayProps
  & CustomFlexProps
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

const StyledFlex = styled('div', {
  bg: '$gray100',
  borderRadius: '$sm',
  p: '$2',
  display: 'flex',
});

const Flex = forwardRef(({ children, as = 'div', ...props }: FlexProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'div';

  return (
    <StyledFlex
      as={componentType}
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
      {...reactProps}
    >
      {children}
    </StyledFlex>
  );
});

export default Flex;
