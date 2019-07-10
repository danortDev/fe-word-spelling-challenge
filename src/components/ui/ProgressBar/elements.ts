import { styled } from 'styletron-react';
import getColor from 'app/palette';
import { CONTENT_WRAPPER_WIDTH } from 'app/constants/styles';

interface StyleProps {
  $progress: number
}

export const Bar = styled('div', {
  width: CONTENT_WRAPPER_WIDTH,
  height: '20px',
  margin: '80px 0 40px 0',
  padding: '4px',
  borderRadius: '100px',
  background: getColor('LIGHTGREY').darken(5).toHexString()
});

export const Progress = styled('div', ({ $progress }: StyleProps) => ({
  width: `${$progress}%`,
  height: '20px',
  borderRadius: '100px',
  transition: '0.4s linear',
  background: getColor('PRIMARY').toHexString()
}));
