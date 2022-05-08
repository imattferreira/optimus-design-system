import { config } from "../styles";

interface BackgroundProps {
  bg?: keyof typeof config.theme.colors;
  bgHover?: keyof typeof config.theme.colors;
}

export default BackgroundProps;
