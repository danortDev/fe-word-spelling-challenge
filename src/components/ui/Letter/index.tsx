import React, { FunctionComponent } from 'react';
import { Container } from './elements';

interface Props {
  letter?: string;
}

const Letter: FunctionComponent<Props> = ({
  letter = 'B'
}) => (
  <Container>
    { letter }
  </Container>
);

export default Letter;
