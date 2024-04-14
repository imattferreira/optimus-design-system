
import dynamicIconImports from 'lucide-react/dynamicIconImports';

export type Sizes = 'size1' | 'size2' | 'size3' | 'size4' | 'size5' | 'size6' | 'size7';

type IconNames = keyof typeof dynamicIconImports;

export type IconProps = {
  // TODO: improve DX
  /**
   * Change text colors based on current theme
   */
  color: { light: string, dark: string }
  /**
   * Select the icon that should be rendered
   */
  name: IconNames;
  /**
   * Change size of button
   */
  size: Sizes;
}
