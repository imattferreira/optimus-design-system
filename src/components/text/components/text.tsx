import cs from '~/utils/cs';
import type { TextProps } from '../helpers/types';
import { SIZES } from '../constants/styles';

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
