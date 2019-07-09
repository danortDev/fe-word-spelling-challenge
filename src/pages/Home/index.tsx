import React from 'react';
import { useChallengeContext } from 'app/contexts/Challenge';
import AppBar from 'app/components/ui/AppBar';
import Exercise from 'app/components/challenge/Exercise';
import { MainContainer } from './elements';

const Home = () => {
  const [{ currentExercise }] = useChallengeContext();

  return (
    <div>
      <AppBar />
      <MainContainer>
        <Exercise exercise={currentExercise} />
      </MainContainer>
    </div>
  );
};

export default Home;
