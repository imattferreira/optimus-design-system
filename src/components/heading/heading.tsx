import cs from "../../utils/cs";

type PolymorphicTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

type Sizes = 'size1' | 'size2' | 'size3' | 'size4' | 'size5' | 'size6';

interface HeadingProps {
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

const SIZES: Record<Sizes, string> = {
  size1: 'text-5xl',
  size2: 'text-4xl',
  size3: 'text-3xl',
  size4: 'text-2xl',
  size5: 'text-xl',
  size6: 'text-lg',
}


function Heading({
  as: Tag = 'h2',
  children,
  color,
  size = 'size1'
}: HeadingProps) {
  return (
    <Tag className={cs(
      'font-bold text-[var(--text-color)] dark:text-[var(--dark-text-color)]',
      SIZES[size],
    )}
    style={{
      // TODO: finish implementation
      // @ts-expect-error: Caused due polymorphism
      '--dark-heading-color': color.dark,
      '--heading-color': color.light
    }}
    >
      {children}
    </Tag>
  )
}

export default Heading;
