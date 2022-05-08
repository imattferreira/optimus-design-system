import type { ReactNode } from "react";

import isAllowedDynamicComponentType from "../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../utils/splitReactPropsOfDesignSystem";
import { styled } from "../styles";

import type FontProps from "../types/FontProps";
import type PositionProps from "../types/PositionProps";
import type SpacingProps from "../types/SpacingProps";

type TextProps = SpacingProps & FontProps & PositionProps & {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
  children: ReactNode;
}

const allowedDynamicComponentTypes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span'];

const StyledText = styled('span', {});

const Text = ({ children, as, ...props }: TextProps) => {
  const { designSystemProps } = splitReactPropsOfDesignSystem(props);
  const componentType = (as && isAllowedDynamicComponentType(allowedDynamicComponentTypes, as))
  ? as
  : 'span';

  return (
    <StyledText as={componentType} css={{ ...designSystemProps }}>
      {children}
    </StyledText>
  )
}

export default Text;
