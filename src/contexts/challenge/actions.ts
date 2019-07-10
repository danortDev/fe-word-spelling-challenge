import { useChallengeContext } from "./";

export const useMoveNext = () => {
  const [challenge, setChallenge] = useChallengeContext();
  return () => {
    const { currentExercise, exercises } = challenge;

    const nextExerciseIndex = currentExercise.index + 1;
    const challengeSolved = nextExerciseIndex === exercises.length;

    return setChallenge({
      ...challenge,
      currentExercise: challengeSolved
        ? challenge.currentExercise
        : { ...exercises[nextExerciseIndex], index: nextExerciseIndex },
      solved: challengeSolved
    });
  }

}
