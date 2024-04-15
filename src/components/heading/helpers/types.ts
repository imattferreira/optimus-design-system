type PolymorphicTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type Sizes = 'size1' | 'size2' | 'size3' | 'size4' | 'size5' | 'size6';

export interface HeadingProps {
  /**
   * Change rendered HTML tag
   */
  as: PolymorphicTags;
  /**
   * Content of Heading
   */
  children: React.ReactNode;
  // TODO: improve DX
  /**
   * Change text colors based on current theme
   */
  color: { light: string, dark: string };
  /**
   * Change size of text
   */
  size: Sizes;
}
