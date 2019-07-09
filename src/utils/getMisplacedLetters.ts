const getMisplacedLetters = (letters: string[], answer: string) =>
  letters.reduce((
    invalidPositions: number[],
    currentIndex,
    index
  ) => {
    return currentIndex !== answer[index]
      ? [...invalidPositions, index]
      : invalidPositions;
  }, []);

export default getMisplacedLetters;
