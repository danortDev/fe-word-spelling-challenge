import React, { FunctionComponent } from 'react';
import Button from 'app/components/ui/Button';

import { Container, Title } from './elements';

const LastStep: FunctionComponent = () => (
  <Container>
    <Title>
      Congratulations!!
    </Title>
    <Button
      text="restart challenge"
      onClick={() => {}}
    />
  </Container>
);

export default LastStep;
