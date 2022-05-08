import { createElement, forwardRef } from "react";
import * as ReactIcons from 'react-icons/fi';

import convertCssProps from "../../utils/convertCssProps";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import type { FontProps, PositionProps, SpacingProps } from "../../types/CssProps";

type CustomIconProps = {
  as: keyof typeof ReactIcons;
}

type IconProps = CustomIconProps
  & FontProps
  & PositionProps
  & SpacingProps;

const StyledIcon = styled('div', {
  fontSize: '$6',
  color: '$gray800'
});

const Icon = forwardRef(({ as: iconName, ...props }: IconProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);

  return (
    <StyledIcon
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
      {...reactProps}
    >
      {createElement(ReactIcons[iconName])}
    </StyledIcon>
  );
});

export default Icon;
