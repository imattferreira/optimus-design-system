import { cloneElement } from 'react';
import { ICON_SIZES, ICON_TYPES } from '../constants/styles';
import type { Sizes, Types } from './types';

interface RenderStyledIconProps {
  icon: React.ReactElement;
  size: Sizes;
  type: Types
}

export const renderStyledIcon = ({
  icon,
  size,
  type
}: RenderStyledIconProps) => (
  cloneElement(icon, { size: ICON_SIZES[size], color: ICON_TYPES[type] })
);
