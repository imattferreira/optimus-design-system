import cs from '~/utils/cs';
import type { HeadingProps } from '../helpers/types';
import { SIZES } from '../constants/styles';

function Heading({
  as: Tag = 'h2',
  children,
  color,
  size = 'size1'
}: HeadingProps) {
  return (
    <Tag className={cs(
      'font-bold font-sans text-[var(--text-color)] dark:text-[var(--dark-text-color)]',
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
