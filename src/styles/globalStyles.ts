import { darkenColor } from '@/utils/utils';
import React from 'react';
import { BACKGROUND_WHITE } from './colors';

export const bodyStyles = {
  margin: 0,
  backgroundColor: darkenColor(BACKGROUND_WHITE, 6),
  // overflowX: 'hidden',
} satisfies React.CSSProperties;
