import { config } from "../../styles";

interface BorderProps {
  /**
   * border width
   */
  borderWidth?: keyof typeof config.theme.sizes;
  /**
   * border top width
   */
  borderTopWidth?: keyof typeof config.theme.sizes;
  /**
   * border bottom width
   */
  borderBottomWidth?: keyof typeof config.theme.sizes;
  /**
   * border right width
   */
  borderRightWidth?: keyof typeof config.theme.sizes;
  /**
   * border left width
   */
  borderLeftWidth?: keyof typeof config.theme.sizes;
  /**
   * border radius
   */
  borderRadius?: keyof typeof config.theme.radii;
  /**
   * border bottom left radius
   */
  borderBottomLeftRadius?: keyof typeof config.theme.radii;
  /**
   * border bottom left radius
   */
  borderBottomRightRadius?: keyof typeof config.theme.radii;
  /**
   * border top left radius
   */
  borderTopLeftRadius?: keyof typeof config.theme.radii;
  /**
   * border top right radius
   */
  borderTopRightRadius?: keyof typeof config.theme.radii;
  /**
   * border color
   */
  borderColor?: keyof typeof config.theme.colors;
  /**
   * border color
   */
  borderTopColor?: keyof typeof config.theme.colors;
  /**
   * border bottom color
   */
  borderBottomColor?: keyof typeof config.theme.colors;
  /**
   * border left color
   */
  borderLeftColor?: keyof typeof config.theme.colors;
  /**
   * border right color
   */
  borderRightColor?: keyof typeof config.theme.colors;
}

export default BorderProps;
