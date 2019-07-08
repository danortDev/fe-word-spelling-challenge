import { styled } from 'styletron-react';
import getColor from 'app/palette';
import { APP_BAR_HEIGHT } from 'app/constants/styles';

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  background: `${getColor('LIGHTGREY')}`,
  minHeight: `calc(100vh - ${APP_BAR_HEIGHT})`
});

export const Card = styled('div', {
  width: '60%',
  height: '160px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  borderRadius: '4px',
  margin: '0 auto',
  background: `${getColor('WHITE')}`,
  boxShadow: `2px 2px 6px 0px ${getColor('BLACK').setAlpha(0.54)}`
});
