import { forwardRef } from "react";

import convertCssProps from "../../../utils/convertCssProps";
import splitReactPropsOfDesignSystem from "../../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../../styles";

import {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  GridProps,
  PositionProps,
  SpacingProps,
} from "../../../types/CssProps";
import isAllowedDynamicComponentType from "../../../utils/isAllowedDynamicComponentType";

type CustomGridItemProps = {
  /**
   * allowed dynamic component types.
   * default is `div`;
   */
  as?: "article" | "aside" | "div" | "footer" | "header" | "nav" | "section";
  /**
   * children
   */
  children: React.ReactNode;
};

type GridItemProps = BackgroundProps &
  BorderProps &
  CustomGridItemProps &
  DisplayProps &
  Omit<GridProps, "areas" | "columns" | "gap" | "rows"> &
  PositionProps &
  SpacingProps;

const allowedDynamicComponentTypes = [
  "article",
  "aside",
  "div",
  "footer",
  "header",
  "nav",
  "section",
];

const StyledGridItem = styled("div", {
  bg: "$gray100",
  borderRadius: "$sm",
  p: "$2",
});

const GridItem = forwardRef(
  ({ children, as = "div", ...props }: GridItemProps, ref) => {
    const { designSystemProps, reactProps } =
      splitReactPropsOfDesignSystem(props);
    const componentType = isAllowedDynamicComponentType(
      allowedDynamicComponentTypes,
      as
    )
      ? as
      : "div";

    return (
      <StyledGridItem
        as={componentType}
        ref={ref as any}
        css={{ ...convertCssProps(designSystemProps) }}
        {...reactProps}
      >
        {children}
      </StyledGridItem>
    );
  }
);

export default GridItem;
