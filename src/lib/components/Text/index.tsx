import type { ReactNode } from "react";

import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";
import { styled } from "../../styles";

import type {
  FontProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type HtmlTextProps = {
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

type TextProps = FontProps
  & HtmlTextProps
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

const Text = ({ children, as = 'span', ...props }: TextProps) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'span';

  return (
    <StyledText as={componentType} css={{ ...designSystemProps }}>
      {children}
    </StyledText>
  )
}

export default Text;
