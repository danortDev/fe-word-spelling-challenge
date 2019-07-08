import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
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
  border: `2px solid ${getColor('Primary').setAlpha(0.6)}`,
  color: `${getColor('PRIMARY')}`,
  ':hover': {
    border: `2px solid ${getColor('Primary')}`,
    color: `${getColor('WHITE')}`,
    background: `${getColor('Primary')}`
  }
});
