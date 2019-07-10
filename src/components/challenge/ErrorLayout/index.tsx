import React, { FunctionComponent } from 'react';
import { useGetChallenge } from 'app/contexts/challenge/actions';
import Button from 'app/components/ui/Button';
import { Title } from './elements';

const ErrorLayout: FunctionComponent = () => {
  const getChallenge = useGetChallenge();

  return (
    <React.Fragment>
      <Title>
        Something went wrong!
      </Title>
      <Button
        text="try again"
        onClick={getChallenge}
      />
    </React.Fragment>
  );
};

export default ErrorLayout;
