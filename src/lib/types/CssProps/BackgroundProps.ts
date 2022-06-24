import { config } from "../../styles";

interface BackgroundProps {
  /**
   * background color
   */
  bg?: keyof typeof config.theme.colors;
  /**
   * background color on mouse hover
   */
  bgHover?: keyof typeof config.theme.colors;
}

export default BackgroundProps;
