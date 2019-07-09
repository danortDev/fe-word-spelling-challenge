import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const ExerciseWrapper = styled('div', {
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
