import { config } from "../styles";

interface PositionProps {
  zIndex?: keyof typeof config.theme.zIndices;
}

export default PositionProps;
