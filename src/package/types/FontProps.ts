import { config } from "../styles";

interface FontProps {
  fontSize?: keyof typeof config.theme.sizes;
  color?: keyof typeof config.theme.colors;
}

export default FontProps;
