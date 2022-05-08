
interface DisplayProps {
  /**
   * distribute space between and around content items along cross-axis
   * of a flex container
   */
  alignItems: 'center' | 'flex-start' | 'flex-end';
  /**
   * change element display type
   */
  display: 'bloc' | 'inline' | 'inline-block' | 'flex' | 'grid' | 'inline-grid' | 'flow-root' | 'none' | 'contents';
  /**
   * distribute space between and around content items along main-axis
   * of a flex container
   */
  justifyContent: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
}

export default DisplayProps;
