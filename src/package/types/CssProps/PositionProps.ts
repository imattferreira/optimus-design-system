import { config } from "../../styles";

interface PositionProps {
  /**
   * z-index
   */
  zIndex?: keyof typeof config.theme.zIndices;
}

export default PositionProps;
