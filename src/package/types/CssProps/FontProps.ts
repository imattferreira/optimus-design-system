import { config } from "../../styles";

interface FontProps {
  /**
   * font-size
   */
  fontSize?: keyof typeof config.theme.sizes;
  /**
   * font color
   */
  color?: keyof typeof config.theme.colors;
}

export default FontProps;
