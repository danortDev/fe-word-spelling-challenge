const reorder = (
  letters: string[],
  startIndex: number,
  endIndex: number
): string[] => {
  const result = Array.from(letters);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

export default reorder;
