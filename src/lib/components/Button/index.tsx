import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  FontProps,
  PositionProps,
  SpacingProps,
} from '../../types/CssProps';
import DisplayProps from "../../types/CssProps/DisplayProps";
import { forwardRef } from "react";

type CustomButtonProps = {
    /**
 * allowed dynamic component types.
 * default is 'button'.
 */
     as?: 'button' | 'a';
  /**
 * children
 */
  children: React.ReactNode;
  /**
   * click handler
   */
  onClick?: () => void;
  /**
   * hover handler
   */
  onHover?: () => void;
  /**
 * mouse pointer presses the button handler
 */
  onMouseDown?: () => void;
  /**
   * mouse pointer is moved onto the component handler
   */
  onMouseEnter?: () => void;
  /**
   * mouse pointer is moved out the component handler
   */
  onMouseLeave?: () => void;
  /**
   * mouse pointer is moved onto the component or onto one of its children handler
   */
  onMouseOver?: () => void;
  /**
   * mouse pointer press the button handler
   */
  onMouseUp?: () => void;
  /**
   * button html types
   */
  type?: 'button' | 'submit' | 'reset';
    /**
   * pre-defined styles variants.
   * default is none.
   */
     variant?: 'primary' | 'secondary' | 'disabled' | 'confirm' | 'warning';
};


type ButtonProps = BackgroundProps
  & BorderProps
  & CustomButtonProps
  & DisplayProps
  & FontProps
  & PositionProps
  & SpacingProps;

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
      disabled: {
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

const Button = forwardRef(({ children, as = 'button', ...props }: ButtonProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'button';

  return (
    <StyledButton
      as={componentType}
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
      {...reactProps}
    >
      {children}
    </StyledButton>
  );
})

export default Button;
