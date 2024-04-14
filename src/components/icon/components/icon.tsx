import { Suspense, lazy } from 'react';
import dynamicIconImports from 'lucide-react/dynamicIconImports';
import type { IconProps } from '../helpers/types';
import { SIZES } from '../constants/styles';

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
