
interface GridProps {
  /**
   * custom areas for the grid
   */
  areas?: string;
  /**
   * quantity of columns in the grid
   */
  columns?: number;
  /**
   * gap between grid items
   */
  gap?: number;
  /**
   * quantity of rows in the grid
   */
  rows?: number;
  /**
   * grid column start
   */
  columnStart?: number | string;
  /**
   * grid column end
   */
  columnEnd?: number | string;
  /**
   * grid row start
   */
  rowStart?: number | string;
  /**
   * grid row end
   */
  rowEnd?: number | string;
}

export default GridProps;
