import { forwardRef } from "react";

import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { config, styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomStackProps = {
  /**
 * allowed dynamic component types.
 * default is `div`;
 */
  as?: 'article' | 'aside' | 'div' | 'footer' | 'header' | 'nav' | 'section';
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * spacing between children components
   */
  spacing?: keyof typeof config.theme.space;
}

type StackProps = BackgroundProps
  & BorderProps
  & CustomStackProps
  & DisplayProps
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

const StyledStack = styled('div', {
  bg: '$gray100',
  borderRadius: '$sm',
  display: 'flex',
  flexDirection: 'column',
  p: '$2',
});

const Stack = forwardRef(({ as = 'div', children, ...props }: StackProps, ref) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'div';

  return (
    <StyledStack
      as={componentType}
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
    >
      {children}
    </StyledStack>
  )
})

export default Stack;
