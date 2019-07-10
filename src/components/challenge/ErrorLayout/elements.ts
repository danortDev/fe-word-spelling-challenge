import { styled } from 'styletron-react';
import getColor from 'app/palette';

export const Title = styled('h1', {
  fontSize: '30px',
  marginBottom: '40px',
  color: getColor('GREY').toHexString()
});
