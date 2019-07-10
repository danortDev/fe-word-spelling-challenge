import { getChallenge } from 'app/client';
import { useChallengeContext } from "./";

export const useMoveNext = () => {
  const [challenge, setChallenge] = useChallengeContext();
  return () => {
    const { currentIndex, exercises } = challenge;

    const nextExerciseIndex = currentIndex + 1;
    const challengeSolved = nextExerciseIndex === exercises.length;

    return setChallenge({
      ...challenge,
      currentIndex: nextExerciseIndex,
      currentExercise: challengeSolved
        ? challenge.currentExercise
        : { ...exercises[nextExerciseIndex], index: nextExerciseIndex },
      solved: challengeSolved
    });
  }
};

export const useGetChallenge = () => {
  const [challenge, setChallenge] = useChallengeContext();
  return async() => {
    setChallenge({ ...challenge, loading: true });
    try {
      const exercises = await getChallenge();
      setChallenge({
        exercises,
        currentExercise: exercises[0],
        currentIndex: 0,
        solved: false,
        loading: false,
        error: false
      });
    } catch (error) {
      setChallenge({ ...challenge, loading: false, error: error });
    }
  };
};
