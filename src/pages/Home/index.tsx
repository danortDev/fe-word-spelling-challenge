import React, { useState, useEffect } from 'react';
import { useChallengeContext } from 'app/contexts/challenge';
import { useGetChallenge } from 'app/contexts/challenge/actions';
import App from 'app/components/layouts/App';
import LoadingOverlay from 'app/components/ui/LoadingOverlay';
import ProgressBar from 'app/components/ui/ProgressBar';
import Exercise from 'app/components/challenge/Exercise';
import LastStep from 'app/components/challenge/LastStep';
import ErrorLayout from 'app/components/challenge/ErrorLayout';

const Home = () => {
  const [challenge] = useChallengeContext();
  const [mounted, setMounted] = useState(false);
  const getChallenge = useGetChallenge();

  useEffect(() => {
    if (!mounted) {
      setMounted(true);
      getChallenge();
    }
  }, [getChallenge, mounted]);

  if (challenge.error) {
    return (
      <App>
        <ErrorLayout />
      </App>
    );
  }

  if (challenge.loading) {
    return (
      <App>
        <LoadingOverlay />
      </App>
    );
  }

  const { currentExercise, exercises, currentIndex, solved } = challenge;
  const progress = currentIndex * 100 / exercises.length;

  return (
    <App>
      {!solved && (
        <Exercise exercise={currentExercise} />
      )}
      {solved && (
        <LastStep />
      )}
      <ProgressBar progress={progress} />
    </App>
  );
};

export default Home;
