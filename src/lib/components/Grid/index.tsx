import { Children, forwardRef } from "react";

import convertCssProps from "../../utils/convertCssProps";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { styled } from "../../styles";

import { GridProps as GridCssProps } from "../../types/CssProps";
import GridItem from "./GridItem";

type CustomGridProps = {
  /**
   * children
   */
  children: React.ReactNode;
};

type GridProps = CustomGridProps &
  Omit<GridCssProps, "columnStart" | "columnEnd" | "rowStart" | "rowEnd">;

const GRID_CHILDREN_PROPS = ["columnStart", "columnEnd", "rowStart", "rowEnd"];

const StyledGrid = styled("div", {
  bg: "$gray100",
  borderRadius: "$sm",
  p: "$2",
  display: "grid",
});

// const hasAnyGridProps = (props: Record<string, string>) =>
//   GRID_CHILDREN_PROPS.some((gridProp) => Object.hasOwn(props, gridProp));

const Grid = forwardRef(
  ({ children, columns, rows, ...props }: GridProps, ref) => {
    const { designSystemProps, reactProps } =
      splitReactPropsOfDesignSystem(props);
    // const a = Children.map(children, ({ props: childrenProps }, index) => {
    //   if (hasAnyGridProps(childrenProps)) {
    //     return {
    //       cloneElement();,
    //     };
    //   }
    // });

    return (
      <StyledGrid
        ref={ref as any}
        css={{ ...convertCssProps(designSystemProps) }}
        {...reactProps}
      >
        {children}
      </StyledGrid>
    );
  }
);

export default Grid;
