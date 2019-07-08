import React, { FunctionComponent } from 'react';
import Letter from 'app/components/ui/Letter';
import { Container } from './elements';


const Word: FunctionComponent = () => (
  <Container>
    <Letter></Letter>
    <Letter letter="z"></Letter>
    <Letter letter="T"></Letter>
  </Container>
);

export default Word;
