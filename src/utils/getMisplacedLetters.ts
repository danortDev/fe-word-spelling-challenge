const getMisplacedLetters = (letters: string[], word: string) =>
  letters.reduce((
    invalidPositions: number[],
    currentIndex,
    index
  ) => {
    return currentIndex !== word[index]
      ? [...invalidPositions, index]
      : invalidPositions;
  }, []);

export default getMisplacedLetters;
