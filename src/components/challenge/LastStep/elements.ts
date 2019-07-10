import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  marginBottom: '40px',
  padding: '80px',
  boxShadow: `2px 2px 6px 0px ${getColor('BLACK').setAlpha(0.54)}`,
  '@media screen and (max-width: 600px)': {
    boxShadow: 'none',
    background: getColor('LIGHTGREY').toHexString()
  }
});

export const Title = styled('h1', {
  fontSize: '36px',
  marginBottom: '40px',
  color: getColor('PRIMARY').toHexString()
});
