import { type MouseEventHandler } from 'react';
export type Types = 'primary' | 'secondary' | 'error' | 'success';

type PolymorphicTags = 'button' | 'a';

export type Shapes = 'filled' | 'outline' | 'ghost';

export type Sizes = 'size1' | 'size2' | 'size3';

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
   * Render an icon as button content
   */
  icon?: React.ReactElement;
  /**
   * Render an icon on left-side
   */
  iconLeft?: React.ReactElement;
  /**
   * Render an icon on right-side
   */
  iconRight?: React.ReactElement;
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
  type: Types;
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

// TODO: dont allow have left and right in the same time
type ButtonContentProps = {
  children: string;
  icon?: never;
  iconLeft?: React.ReactElement;
  iconRight?: React.ReactElement;
} | {
  children?: never;
  icon: React.ReactElement;
  iconLeft?: never;
  iconRight?: never;
};

export type ButtonProps = ButtonCommonProps & BehaviorProps & ButtonContentProps;
