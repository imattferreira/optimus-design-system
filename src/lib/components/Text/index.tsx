import { forwardRef, ReactNode } from "react";

import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";
import { styled } from "../../styles";

import type {
  FontProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomTextProps = {
  /**
   * allowed dynamic component types.
   * default is 'span'.
   */
   as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
   /**
    * children
    */
   children: ReactNode;
}

type TextProps = CustomTextProps
  & FontProps
  & PositionProps
  & SpacingProps;

const allowedDynamicComponentTypes = [
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'p',
  'span',
];

const StyledText = styled('span', {});

const Text = forwardRef(({ children, as = 'span', ...props }: TextProps, ref) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'span';

  return (
    <StyledText as={componentType} ref={ref as any} css={{ ...designSystemProps }}>
      {children}
    </StyledText>
  )
})

export default Text;
