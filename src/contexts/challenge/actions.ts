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
