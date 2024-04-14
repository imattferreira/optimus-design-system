import type { MouseEventHandler } from 'react';
import cs from '../../utils/cs';
import type { StylesOf } from '../../@types/helpers';

type ButtonTypes = 'primary' | 'secondary' | 'error' | 'success';

type PolymorphicTags = 'button' | 'a';

type Shapes = 'filled' | 'outline' | 'ghost';

type Sizes = 'size1' | 'size2' | 'size3';

type ButtonCommonProps = {
  /**
   * Change rendered HTML tag
   */
  as?: PolymorphicTags;
  /**
   * Content of Button
  */
  children: string;
  /**
   * Disable all interactivity of button
   */
  disabled?: boolean;
  /**
   * Ocupe full width
   */
  full?: boolean;
  /**
   * WIP
   */
  icon?: null;
  /**
   * WIP
   */
  iconLeft?: null;
  /**
   * WIP
   */
  iconRight?: null;
  /**
   * Attach a link to the element
   */
  href?: string;
  /**
   * Change to button shape
   */
  shape: Shapes;
  /**
   * Change size of button
   */
  size?: Sizes;
  /**
   * Change color palete
   */
  type: ButtonTypes;
  /**
   * Callback to listen to `onclick` event
   */
  onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void;
}

type ButtonButtonProps = {
  as?: 'button';
  onClick?: (event: MouseEventHandler<HTMLButtonElement>) => void
}

type ButtonLinkProps = {
  as: 'a';
  href: string;
  onClick?: (event: MouseEventHandler<HTMLAnchorElement>) => void
}

type BehaviorProps = ButtonButtonProps | ButtonLinkProps;

type ButtonProps = ButtonCommonProps & BehaviorProps;

const SIZES: StylesOf<Sizes> = {
  size1: 'h-12 min-w-12 px-4',
  size2: 'h-11 min-w-11 px-4',
  size3: 'h-10 min-w-10 px-3'
}


const TYPES: Record<ButtonTypes, StylesOf<Shapes>> = {
  error: {
    filled: 'bg-red-700 text-red-100 hover:bg-red-500 active:ring-red-500',
    ghost: 'text-red-700 hover:text-red-400 active:ring-red-300',
    outline: 'border-red-700 text-red-700 hover:bg-red-700 hover:text-red-100 active:ring-red-500',
  },
  primary: {
    filled: 'bg-violet-700 text-violet-100 hover:bg-violet-500 active:ring-violet-500',
    ghost: 'text-violet-700 hover:text-violet-400 active:ring-violet-300',
    outline: 'border-violet-700 text-violet-700 hover:bg-violet-700 hover:text-violet-100 active:ring-violet-500',
  },
  secondary: {
    filled: 'bg-fuchsia-700 text-fuchsia-100 hover:bg-fuchsia-500 active:ring-fuchsia-500',
    ghost: 'text-fuchsia-700 hover:text-fuchsia-400 active:ring-fuchsia-300',
    outline: 'border-fuchsia-700 text-fuchsia-700 hover:bg-fuchsia-700 hover:text-fuchsia-100 active:ring-fuchsia-500',
  },
  success: {
    filled: 'bg-teal-700 text-teal-100 hover:bg-teal-500 active:ring-teal-500',
    ghost: 'text-teal-700 hover:text-teal-400 active:ring-teal-300',
    outline: 'border-teal-700 text-teal-700 hover:bg-teal-700 hover:text-teal-100 active:ring-teal-500',
  },
}

const DISABLED_BY_SHAPE: StylesOf<Shapes> = {
  filled: 'bg-gray-300 text-gray-600',
  ghost: 'text-gray-500',
  outline: 'border-gray-300 text-gray-500',
}

function Button({
  as: Tag = 'button',
  children,
  disabled = false,
  full = false,
  href,
  size = 'size1',
  shape,
  type,
  onClick
}: ButtonProps) {
  return (
    <Tag
      // TODO: configure `rel`, `target` and `refererpolicy`
      href={Tag === 'a' ? href : undefined}
      className={cs(
        'rounded-md transition-all active:ring-2 ring-offset-2 font-medium cursor-pointer',
        'disabled:ring-transparent disabled:cursor-not-allowed',
        disabled ? DISABLED_BY_SHAPE[shape] : TYPES[type][shape],
        shape === 'outline' && 'border-solid border-2',
        SIZES[size],
        full && 'w-full',
      )}
      disabled={disabled}
      // @ts-expect-error: Caused due polymorphism
      onClick={onClick}
    >
      {children}
    </Tag>
  )
}

export default Button;
