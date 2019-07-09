import { styled } from 'styletron-react';
import getColor from 'app/palette';

interface ContainerModifiers {
  $iconButton: boolean
  $fullWidth: boolean
}

const iconButtonStyles = {
  width: '60px',
  height: '60px',
  padding: 0,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '50%',
  fill: `${getColor('WHITE')}`
};

export const Container = styled('div', ({
  $fullWidth,
  $iconButton
}: ContainerModifiers) => ({
  cursor: 'pointer',
  textAlign: 'center',
  width: $fullWidth ? '100%' : 'max-content',
  padding: '20px',
  fontWeigth: '100',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY')}`,
  ':hover': {
    boxShadow: `0px 0px 0px 4px ${getColor('PRIMARY').setAlpha(0.40)}`
  },
  ...$iconButton && iconButtonStyles
}));

export const IconWrapper = styled('div', {
  width: '26px',
  height: 'auto'
});
