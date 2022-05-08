import type { ButtonHTMLAttributes } from "react";

import convertCssProps from "../utils/convertCssProps";
import isAllowedDynamicComponentType from "../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../utils/splitReactPropsOfDesignSystem";
import { styled } from "../styles";

import type BackgroundProps from "../types/BackgroundProps";
import type FontProps from "../types/FontProps";
import type PositionProps from "../types/PositionProps";
import type SpacingProps from "../types/SpacingProps";
import BorderProps from "../types/BorderProps";

type HtmlButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'style' | 'className' | 'id'>;
type StyledButtonProps = {
  variant?: 'primary' | 'secondary' | 'blocked' | 'confirm' | 'warning';
  as?: 'button' | 'a';
}
type ButtonProps = SpacingProps
  & FontProps
  & BackgroundProps
  & PositionProps
  & BorderProps
  & HtmlButtonProps
  & StyledButtonProps;

const allowedDynamicComponentTypes = ['button', 'a'];

const StyledButton = styled('button', {
  p: '$2 $4',
  bg: '$gray500',
  fontWeight: 600,
  color: '$gray100',
  border: 'none',
  borderRadius: '$base',
  '&:hover': {
    bg: '$gray400',
  },
  variants: {
    variant: {
      primary: {
        bg: '$blue600',
        color: '$gray100',
        '&:hover': {
          bg: '$blue500',
        },
      },
      secondary: {
        bg: '$purple500',
        color: '$gray100',
        '&:hover': {
          bg: '$purple400',
        },
      },
      blocked: {
        bg: '$gray400',
        color: '$gray100',
        cursor: 'not-allowed'
      },
      confirm: {
        bg: '$green600',
        color: '$gray100',
        '&:hover': {
          bg: '$green500'
        }
      },
      warning: {
        bg: '$red600',
        color: '$gray100',
        '&:hover': {
          bg: '$red400'
        }
      },
    }
  }
});

function Button({ children, as, ...props }: ButtonProps) {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);
  const componentType = (as && isAllowedDynamicComponentType(allowedDynamicComponentTypes, as))
    ? as
    : 'button';

  return (
    <StyledButton
      as={componentType}
      css={{...convertCssProps(designSystemProps)}}
      {...reactProps}
    >
      {children}
    </StyledButton>
  );
}

export default Button;
