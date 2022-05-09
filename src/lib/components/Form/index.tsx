import { forwardRef } from "react";

import convertCssProps from "../../utils/convertCssProps";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";

import { config, styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  DisplayProps,
  FontProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomFormProps = {
  /**
   * children
   */
  children: React.ReactNode;
  /**
   * form submit handler
   */
  onSubmit: () => void;
  /**
 * spacing between children components
 */
  spacing?: keyof typeof config.theme.space;
}

type FormProps = BackgroundProps
  & BorderProps
  & CustomFormProps
  & DisplayProps
  & FontProps
  & PositionProps
  & SpacingProps;


const StyledForm = styled('form', {
  p: '$4',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  borderRadius: '$md',
  borderStyle: 'solid',
});

const Form = forwardRef(({ children, ...props }: FormProps, ref) => {
  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);

  return (
    <StyledForm
      ref={ref as any}
      css={{ ...convertCssProps(designSystemProps) }}
      {...reactProps}
    >
      {children}
    </StyledForm>
  )
});

export default Form;
