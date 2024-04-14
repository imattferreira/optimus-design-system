import cs from '~/utils/cs';
import type { ButtonProps } from '../helpers/types';
import { DISABLED_BY_SHAPE, INTERNAL_PADDING, SIZES, TYPES } from '../constants/styles';
import { renderStyledIcon } from '../helpers/utils';

function Button({
  as: Tag = 'button',
  children,
  disabled = false,
  full = false,
  href,
  icon,
  iconLeft,
  iconRight,
  shape,
  size = 'size1',
  type,
  onClick
}: ButtonProps) {
  return (
    <Tag
      // TODO: configure `rel`, `target` and `refererpolicy`
      href={Tag === 'a' ? href : undefined}
      className={cs(
        'rounded-md transition-all active:ring-2 ring-offset-2 font-medium cursor-pointer flex gap-x-2 items-center justify-center',
        'disabled:ring-transparent disabled:cursor-not-allowed',
        disabled ? DISABLED_BY_SHAPE[shape] : TYPES[type][shape],
        !icon && INTERNAL_PADDING[size],
        shape === 'outline' && 'border-solid border-2',
        SIZES[size],
        full && 'w-full',
      )}
      disabled={disabled}
      // @ts-expect-error: Caused due polymorphism
      onClick={onClick}
    >
      {iconLeft && renderStyledIcon({ icon: iconLeft, size, type })}
      {icon ? renderStyledIcon({ icon, size, type }) : children}
      {iconRight && renderStyledIcon({ icon: iconRight, size, type })}
    </Tag>
  )
}

export default Button;
