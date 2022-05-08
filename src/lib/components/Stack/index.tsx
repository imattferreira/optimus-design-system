import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import type { BackgroundProps, BorderProps, PositionProps, SpacingProps } from "../../types/CssProps";
import DisplayProps from "../../types/CssProps/DisplayProps";

type HtmlStackProps = {
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

type StackProps = BackgroundProps
  & BorderProps
  & DisplayProps
  & HtmlStackProps
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
});

const Stack = ({ as = 'div', children, ...props }: StackProps) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'div';

  return (
    <StyledStack
      as={componentType}
      css={{ ...convertCssProps(designSystemProps) }}
    >
      {children}
    </StyledStack>
  )
}

export default Stack;
