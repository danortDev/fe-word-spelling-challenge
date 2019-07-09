import { styled } from 'styletron-react';
import getColor from 'app/palette';

export interface StyleModifiers {
  $color?: string,
  $background?: string,
  $borderColor?: string
}

export const Container = styled('div', ({
  $color,
  $background,
  $borderColor
}: StyleModifiers) => {
  const color = $color || getColor('PRIMARY').toHexString();
  const background = $background || getColor('WHITE').toHexString();
  const borderColor = $borderColor || getColor('PRIMARY').setAlpha(0.6);

  return {
    color,
    background,
    cursor: 'pointer',
    width: '50px',
    height: '50px',
    margin: '0 10px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    fontWeight: 500,
    borderRadius: '8px',
    border: `2px solid ${borderColor}`,
    ':hover': {
      border: `2px solid ${getColor('Primary')}`,
      color: getColor('WHITE').toHexString(),
      background: getColor('PRIMARY').toHexString()
    }
  }
});
