import { config } from "../styles";

interface MarginProps {
  m?: keyof typeof config.theme.space,
  mt?: keyof typeof config.theme.space,
  mb?: keyof typeof config.theme.space,
  ml?: keyof typeof config.theme.space,
  mr?: keyof typeof config.theme.space,
}

interface PaddingProps {
  p?: keyof typeof config.theme.space,
  pt?: keyof typeof config.theme.space,
  pb?: keyof typeof config.theme.space,
  pl?: keyof typeof config.theme.space,
  pr?: keyof typeof config.theme.space,
}

interface SpacingProps extends MarginProps, PaddingProps {}

export default SpacingProps;
