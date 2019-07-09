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
