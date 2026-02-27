import { styled } from '../stitches.config';

const Button = styled('a', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  fontWeight: '$medium',
  borderRadius: '$md',
  textDecoration: 'none',
  cursor: 'pointer',
  transition: '$all',
  border: '1px solid transparent',

  variants: {
    variant: {
      primary: {
        backgroundColor: '$accent',
        color: '$bg',
        borderColor: '$accent',
        boxShadow: '0 4px 14px rgba(56, 189, 248, 0.2)',
        '&:hover': {
          boxShadow: '0 6px 20px rgba(56, 189, 248, 0.35)',
          transform: 'scale(1.05)',
        },
      },
      outline: {
        backgroundColor: 'rgba(15, 22, 41, 0.9)',
        color: '$textPrimary',
        borderColor: '$border',
        backdropFilter: 'blur(8px)',
        '&:hover': {
          borderColor: 'rgba(56, 189, 248, 0.4)',
          transform: 'scale(1.05)',
        },
      },
    },
    size: {
      small: {
        fontSize: '$sm',
        padding: '$2 $3',
      },
      medium: {
        fontSize: '$sm',
        padding: '$2 $4',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
});

export default Button;
