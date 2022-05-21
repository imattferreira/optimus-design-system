import { forwardRef } from "react";

import convertCssProps from "../../utils/convertCssProps";
import parseArrToStr from "../../utils/parseArrToStr";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import {
  BorderProps,
  DisplayProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomImageProps = {
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
   * image sizes
   */
  sizes?: string[];
  /**
 * image source path
 */
  src: string;
  /**
   * responsive image source paths
   */
  srcSet?: string[];
}

type ImageProps = BorderProps
  & CustomImageProps
  & DisplayProps
  & PositionProps
  & SpacingProps;

const StyledImage = styled('img', {
  borderRadius: '$base',
});

const Image = forwardRef(({
  sizes,
  src,
  srcSet,
  ...props
}: ImageProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);

  return (
    <StyledImage
      ref={ref as any}
      sizes={parseArrToStr(sizes, ',')}
      src={src}
      srcSet={parseArrToStr(srcSet, ',')}
      css={{ ...convertCssProps(designSystemProps) }}
      {...reactProps}
    />
  );
});

export default Image;
