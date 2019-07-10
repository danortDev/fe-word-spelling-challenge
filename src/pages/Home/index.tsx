import React from 'react';
import { useChallengeContext } from 'app/contexts/challenge';
import AppBar from 'app/components/ui/AppBar';
import ProgressBar from 'app/components/ui/ProgressBar';
import Exercise from 'app/components/challenge/Exercise';
import LastStep from 'app/components/challenge/LastStep';
import { MainContainer } from './elements';

const Home = () => {
  const [challenge] = useChallengeContext();
  const { currentExercise, exercises, currentIndex, solved } = challenge;
  const progress = currentIndex * 100 / exercises.length;

  return (
    <div>
      <AppBar />
      <MainContainer>
        {!solved && (
          <Exercise exercise={currentExercise} />
        )}
        {solved && (
          <LastStep />
        )}
        <ProgressBar progress={progress} />
      </MainContainer>
    </div>
  );
};

export default Home;
