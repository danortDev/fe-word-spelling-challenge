import { styled } from 'styletron-react';
import getColor from 'app/palette';
import { APP_BAR_HEIGHT } from 'app/constants/styles';

export const Container = styled('nav', {
  height: APP_BAR_HEIGHT,
  display: 'flex',
  alignItems: 'center',
  fontSize: '16px',
  color: `${getColor('WHITE')}`,
  background: `${getColor('PRIMARY')}`
});

export const Title = styled('h1', {
  fontSize: '16px',
  marginLeft: '20px',
  fontWeigth: '500',
});