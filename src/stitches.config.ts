import { createStitches } from '@stitches/react';

export const { styled, css, globalCss, keyframes, getCssText, theme, createTheme } =
  createStitches({
    theme: {
      colors: {
        bg: '#080C14',
        surface: '#0F1629',
        border: '#1E2D4A',
        accent: '#38BDF8',
        textPrimary: '#F1F5F9',
        textSecondary: '#94A3B8',
        textMuted: '#475569',
      },
      space: {
        1: '4px',
        2: '8px',
        3: '12px',
        4: '16px',
        5: '20px',
        6: '24px',
      },
      fontSizes: {
        sm: '0.875rem',
        base: '1rem',
      },
      fontWeights: {
        medium: '500',
        bold: '700',
      },
      radii: {
        md: '8px',
        lg: '12px',
      },
      transitions: {
        all: 'all 0.2s ease',
      },
    },
  });
