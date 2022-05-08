import { forwardRef } from "react";
import NextLink from 'next/link';

import convertCssProps from "../../utils/convertCssProps";
import isAllowedDynamicComponentType from "../../utils/isAllowedDynamicComponentType";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  FontProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomLinkProps = {
  /**
  * allowed dynamic component types.
  * default is 'button'.
  */
  as?: 'a' | 'button';
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * anchor href
   */
  href: string;
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
   * anchor target
   */
  target?: '_blank' | '_self' | 'parent' | '_top'
}

type LinkProps = BackgroundProps
  & BorderProps
  & CustomLinkProps
  & DisplayProps
  & FontProps
  & PositionProps
  & SpacingProps;

const allowedDynamicComponentTypes = ['a', 'button'];

const StyledLink = styled('a', {
  color: '$gray800',
  p: '4',
  borderRadius: '2',
  '&:hover': {
    color: '$gray600'
  }
});

const Link = forwardRef(({ as = 'a', children,  href, ...props }: LinkProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);
  const componentType = isAllowedDynamicComponentType(
    allowedDynamicComponentTypes,
    as,
  ) ? as : 'a';

  if (!href.startsWith('http')) {
    return (
      <NextLink href={href} passHref>
        <StyledLink
        as={componentType}
        ref={ref as any}
        css={{ ...convertCssProps(designSystemProps) }}
        {...reactProps}
      >
        {children}
      </StyledLink>
      </NextLink>
    )
  }

  return (
    <StyledLink
      as={componentType}
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
      href={href}
      rel="noopener"
      {...reactProps}
    >
      {children}
    </StyledLink>
  )
});

export default Link;
