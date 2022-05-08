import { config } from "../../styles";

interface SpacingProps {
  /**
   * margin
   */
  m?: keyof typeof config.theme.space,
  /**
   * margin top
   */
  mt?: keyof typeof config.theme.space,
  /**
   * margin bottom
   */
  mb?: keyof typeof config.theme.space,
  /**
   * margin left
   */
  ml?: keyof typeof config.theme.space,
  /**
   * margin right
   */
  mr?: keyof typeof config.theme.space,
  /**
   * margin left and right
   */
  mX?: keyof typeof config.theme.space,
  /**
   * margin top and bottom
   */
  mY?: keyof typeof config.theme.space,
  /**
   * padding
   */
  p?: keyof typeof config.theme.space,
  /**
   * padding top
   */
  pt?: keyof typeof config.theme.space,
  /**
   * padding bottom
   */
  pb?: keyof typeof config.theme.space,
  /**
   * padding left
   */
  pl?: keyof typeof config.theme.space,
  /**
   * padding right
   */
  pr?: keyof typeof config.theme.space,
  /**
   * padding left and right
   */
  pX?: keyof typeof config.theme.space,
  /**
   * padding top and bottom
   */
  pY?: keyof typeof config.theme.space,
};

export default SpacingProps;
