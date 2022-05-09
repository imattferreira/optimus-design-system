import { forwardRef, useId } from "react";
import * as ReactIcons from 'react-icons/fi';

import convertCssProps from "../../utils/convertCssProps";
import splitReactPropsOfDesignSystem from "../../utils/splitReactPropsOfDesignSystem";
import Icon from "../Icon";

import { styled } from "../../styles";

import type {
  BackgroundProps,
  BorderProps,
  FontProps,
  PositionProps,
  SpacingProps,
} from "../../types/CssProps";

type CustomInputProps = {
  /**
   * default value of input
   */
  defaultValue?: string;
  /**
   * type of left icon to show
   */
  iconLeft?: keyof typeof ReactIcons;
  /**
   * type of left icon to show
   */
  iconRight?: keyof typeof ReactIcons;
  /**
   * input label
   */
  label?: string;
  /**
   * input placeholder
   */
  placeholder?: string;
  /**
   * input type
   */
  type?: 'text' | 'email' | 'number' | 'tel' | 'url' | 'time' | 'week' | 'hidden' | 'color' | 'date';
};

type InputProps = BackgroundProps
  & BorderProps
  & CustomInputProps
  & FontProps
  & PositionProps
  & SpacingProps;

const Container = styled('div', {
  '& label': {
    display:'block',
    mb: '$2',
    cursor: 'pointer',
  },
});

const InputContainer = styled('div', {
  p: '$1',
  px: '$2',
  borderWidth: '$sm',
  borderStyle: 'solid',
  borderColor: '$gray400',
  borderRadius: '$md',
  bg: '$gray100',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  '&:focus-within': {
    borderColor: '$blue500',
  }
});

const StyledInput = styled('input', {
  size: '100%',
  p: '$2',
  bg: '$gray100',
  fontSize: '$4',
  color: '$gray800',
  border: 'none',
  outline: 'none'
});

const Input = forwardRef(({
  iconLeft,
  iconRight,
  label,
  ...props
}: InputProps, ref) => {
  const customId = useId();

  const { designSystemProps, reactProps } = splitReactPropsOfDesignSystem(props);

  return (
    <Container>
    {
      label && (
        <label htmlFor={customId}>
        {label}
      </label>
      )
    }
      <InputContainer>
        {iconLeft && <Icon as={iconLeft} color="gray900" />}
        <StyledInput
          id={customId}
          ref={ref as any}
          css={{ ...convertCssProps(designSystemProps) }}
          {...reactProps}
        />
        {iconRight && <Icon as={iconRight} />}
      </InputContainer>
    </Container>
  );
});

export default Input;
