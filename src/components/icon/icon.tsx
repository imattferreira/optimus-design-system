import { Suspense, lazy } from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';

type Sizes = 'size1' | 'size2' | 'size3' | 'size4' | 'size5' | 'size6' | 'size7';

export type IconNames = keyof typeof dynamicIconImports;

type IconProps = {
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

const SIZES: Record<Sizes, number> = {
  size1: 56,
  size2: 48,
  size3: 36,
  size4: 32,
  size5: 28,
  size6: 24,
  size7: 20,
}

function Icon({ color, name, size }: IconProps) {
  const Icon = lazy(dynamicIconImports[name]);

  return (
    <Suspense fallback={<div style={{ height: SIZES[size], width: SIZES[size] }} />}>
      <Icon size={SIZES[size]}
        className='text-[var(--text-color)] dark:text-[var(--dark-text-color)]'
        style={{
          // TODO: finish implementation
          // @ts-expect-error: Caused due polymorphism
          '--dark-text-color': color.dark,
          '--text-color': color.light
        }}
      />
    </Suspense>
  )
}

export default Icon;
