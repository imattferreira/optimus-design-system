
interface DisplayProps {
  /**
   * distribute space between and around content items along cross-axis
   * of a flex container
   */
  alignItems?: 'center' | 'flex-start' | 'flex-end';
  /**
   * flex-direction
   */
  direction?: 'column' | 'column-reverse' | 'row' | 'row-reverse';
  /**
   * change element display type
   */
  display?: 'block' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'inline-grid' | 'flow-root' | 'none' | 'contents';
  /**
   * distribute space between and around content items along main-axis
   * of a flex container
   */
  justifyContent?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

export default DisplayProps;
