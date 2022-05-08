import { config } from "../styles";

interface BorderProps {
  // border width
  borderWidth?: keyof typeof config.theme.sizes;
  borderTopWidth?: keyof typeof config.theme.sizes;
  borderBottomWidth?: keyof typeof config.theme.sizes;
  borderRightWidth?: keyof typeof config.theme.sizes;
  borderLeftWidth?: keyof typeof config.theme.sizes;
  // border radius
  borderRadius?: keyof typeof config.theme.radii;
  borderBottomLeftRadius?: keyof typeof config.theme.radii;
  borderBottomRightRadius?: keyof typeof config.theme.radii;
  borderTopLeftRadius?: keyof typeof config.theme.radii;
  borderTopRightRadius?: keyof typeof config.theme.radii;
  // border color
  borderColor?: keyof typeof config.theme.colors;
  borderTopColor?: keyof typeof config.theme.colors;
  borderBottomColor?: keyof typeof config.theme.colors;
  borderLeftColor?: keyof typeof config.theme.colors;
  borderRightColor?: keyof typeof config.theme.colors;
}

export default BorderProps;
