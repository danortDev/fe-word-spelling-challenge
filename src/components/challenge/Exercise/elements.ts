import { styled } from 'styletron-react';
import getColor from 'app/palette';
import { CONTENT_WRAPPER_WIDTH } from 'app/constants/styles';

export const ExerciseWrapper = styled('div', {
  width: CONTENT_WRAPPER_WIDTH,
  '@media screen and (max-width: 700px)': {
    width: '100%'
  }
});

export const Instructions = styled('h1', {
  fontSize: '24px',
  marginBottom: '40px',
  textAlign: 'center',
  color: getColor('TEXT_SECONDARY').toHexString(),
  '@media screen and (max-width: 700px)': {
    fontSize: '16px',
    marginBottom: 0
  }
});

export const Card = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '40px',
  borderRadius: '4px',
  background: getColor('WHITE').toHexString(),
  boxShadow: `2px 2px 6px 0px ${getColor('BLACK').setAlpha(0.54)}`,
  '@media screen and (max-width: 700px)': {
    boxShadow: 'none',
    background: getColor('LIGHTGREY').toHexString(),
  }
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
  marginTop: '20px',
  '@media screen and (max-width: 700px)': {
    flexDirection: 'column'
  }
});

const noticeBoxStyles = {
  marginRight: '20px',
  textAlign: 'center' as 'center',
  '@media screen and (max-width: 700px)': {
    padding: '0 20px 40px'
  }
}

export const Hint = styled('div', {
  color: getColor('RED').toHexString(),
  ...noticeBoxStyles
});

export const Success = styled('div', {
  color: getColor('GREEN').toHexString(),
  ...noticeBoxStyles
});
