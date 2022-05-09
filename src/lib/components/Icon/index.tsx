import { createElement, forwardRef } from "react";
import * as ReactIcons from 'react-icons/fi';

import convertCssProps from "../../utils/convertCssProps";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import type { FontProps, PositionProps, SpacingProps } from "../../types/CssProps";

type CustomIconProps = {
  /**
   * type of icon to show
   */
  as: keyof typeof ReactIcons;
}

type IconProps = CustomIconProps
  & FontProps
  & PositionProps
  & SpacingProps;

const StyledIcon = styled('div', {
  fontSize: '$4',
  color: '$gray900',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Icon = forwardRef(({ as: iconName, color, ...props }: IconProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);

  return (
    <StyledIcon
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
      {...reactProps}
    >
      {createElement(ReactIcons[iconName], { color })}
    </StyledIcon>
  );
});

export default Icon;
