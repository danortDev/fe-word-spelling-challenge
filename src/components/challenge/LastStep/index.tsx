import React, { FunctionComponent } from 'react';
import { useGetChallenge } from 'app/contexts/challenge/actions';
import Button from 'app/components/ui/Button';

import { Container, Title } from './elements';

const LastStep: FunctionComponent = () => {
  const getChallenge = useGetChallenge();

  return (
    <Container>
      <Title>
        That is all, you did it!!
      </Title>
      <Button
        text="Start a new challenge"
        onClick={getChallenge}
      />
    </Container>
  );
};

export default LastStep;
