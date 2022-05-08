import { config } from "../styles";

interface SpacingProps {
  // margin
  m?: keyof typeof config.theme.space,
  mt?: keyof typeof config.theme.space,
  mb?: keyof typeof config.theme.space,
  ml?: keyof typeof config.theme.space,
  mr?: keyof typeof config.theme.space,
  // padding
  p?: keyof typeof config.theme.space,
  pt?: keyof typeof config.theme.space,
  pb?: keyof typeof config.theme.space,
  pl?: keyof typeof config.theme.space,
  pr?: keyof typeof config.theme.space,
};

export default SpacingProps;
