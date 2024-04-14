import type { StylesOf } from '../../@types/helpers';
import cs from '../../utils/cs';

type PolymorphicTags = 'span' | 'p';

type Sizes = 'size1' | 'size2' | 'size3';

interface TextCommonProps {
  /**
   * Change rendered HTML tag
   */
  as?: PolymorphicTags;
  /**
   * Content of Text
   */
  children: React.ReactNode;
  // TODO: improve DX
  /**
   * Change text colors based on current theme
   */
  color: { light: string, dark: string }
  /**
   * Change size of text
   */
  size?: Sizes;
  /**
   * Style text to bold
   */
  bold?: boolean;
  /**
   * Style text to italic
   */
  italic?: boolean;
}

// TODO: improve DX of it
type StylesProps = {
  bold: true;
  italic?: never;
} | {
  bold?: never;
  italic: true;
} | {
  bold?: undefined;
  italic?: undefined;
};

type TextProps = TextCommonProps & StylesProps;

const SIZES: StylesOf<Sizes> = {
  size1: 'text-base',
  size2: 'text-sm',
  size3: 'text-xs'
};

function Text({
  as: Tag = 'span',
  color,
  bold,
  children,
  italic,
  size = 'size1',
}: TextProps) {
  return (
    <Tag
      className={cs(
        'text-[var(--text-color)] dark:text-[var(--dark-text-color)]',
        SIZES[size],
        bold && 'font-bold',
        italic && 'italic'
      )}
      style={{
        // TODO: finish implementation
        // @ts-expect-error: Caused due polymorphism
        '--dark-text-color': color.dark,
        '--text-color': color.light
      }}
    >
      {children}
    </Tag>
  )
}

export default Text;
