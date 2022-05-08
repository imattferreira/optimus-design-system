import { config } from "../../styles";

interface FontProps {
  /**
   * font-size
   */
  fontSize?: keyof typeof config.theme.fontSizes;
  /**
   * font-weight
   */
  fontWeight?: keyof typeof config.theme.fontWeights;
  /**
   * font color
   */
  color?: keyof typeof config.theme.colors;
}

export default FontProps;
