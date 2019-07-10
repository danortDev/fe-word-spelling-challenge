import React from 'react';
import { useChallengeContext } from 'app/contexts/challenge';
import AppBar from 'app/components/ui/AppBar';
import Exercise from 'app/components/challenge/Exercise';
import { MainContainer } from './elements';

const Home = () => {
  const [challenge] = useChallengeContext();
  const { currentExercise } = challenge;

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
