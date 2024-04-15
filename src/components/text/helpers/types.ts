type PolymorphicTags = 'span' | 'p';

export type Sizes = 'size1' | 'size2' | 'size3';

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

export type TextProps = TextCommonProps & StylesProps;
