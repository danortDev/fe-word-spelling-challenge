import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const ExerciseWrapper = styled('div', {
  width: '60%'
});

export const Title = styled('h1', {
  fontSize: '24px',
  marginBottom: '40px',
  color: getColor('TEXT_SECONDARY').toHexString()
});

export const Card = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  borderRadius: '4px',
  background: `${getColor('WHITE')}`,
  boxShadow: `2px 2px 6px 0px ${getColor('BLACK').setAlpha(0.54)}`
});

export const WordWrapper = styled('div', {
  display: 'flex',
  margin: '40px 0',
  justifyContent: 'center',
  alignItems: 'center'
});

export const BottomBar = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  marginTop: '20px'
});

export const Hint = styled('div', {
  marginRight: '20px',
  color: getColor('RED').toHexString()
});

export const Success = styled('div', {
  marginRight: '20px',
  color: getColor('GREEN').toHexString()
});
