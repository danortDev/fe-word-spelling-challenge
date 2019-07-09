import { styled } from 'styletron-react';
import getColor from 'app/palette';
import { APP_BAR_HEIGHT } from 'app/constants/styles';

export const MainContainer = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  background: `${getColor('LIGHTGREY')}`,
  minHeight: `calc(100vh - ${APP_BAR_HEIGHT})`
});

export const ChallengeWrapper = styled('div', {
  width: '60%',
  boxShadow: `2px 2px 6px 0px ${getColor('BLACK').setAlpha(0.54)}`
});

export const Card = styled('section', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '40px',
  borderRadius: '4px',
  background: `${getColor('WHITE')}`,
});

export const Actions = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
});
