import React, { useState, useEffect, FunctionComponent } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Button from 'app/components/ui/Button';
import DraggableWord from 'app/components/challenge/DraggableWord';
import UtterButton from 'app/components/challenge/UtterButton';
import { Exercise as ExerciseInterface } from 'app/contexts/challenge';
import { ExerciseWrapper, Card, Actions } from './elements';
import { useMoveNext } from 'app/contexts/challenge/actions';
import reorderArray from 'app/utils/reorderArray';
import getMisplacedLetters from 'app/utils/getMisplacedLetters'

interface Props {
  exercise: ExerciseInterface
}

const Exercise: FunctionComponent<Props> = ({
  exercise
}) => {
  const [letters, setLetters] = useState<string[]>(
    exercise.scrambled.split("")
  );
  const [solved, setSolved] = useState<boolean>(false);
  const [misplacedLetters, setMisplacedLetters] = useState<number[]>([]);
  const moveNext = useMoveNext();

  useEffect(() => {
    if (exercise && exercise.scrambled) {
      setLetters(exercise.scrambled.split(""));
    }
  }, [exercise]);

  useEffect(() => {
    if (solved) {
      setSolved(false);
      moveNext();
    }
  }, [solved, moveNext]);

  const onDragStart = () => {
    setMisplacedLetters([]);
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    if (!destination) return;
    const reorderedLetters = reorderArray(
      letters,
      source.index,
      destination.index
    );

    setLetters(reorderedLetters as string[]);
  };

  const reviewAnswer = () => {
    const answer = letters.join("");
    if (answer === exercise.word) {
      setSolved(true);
    } else {
      setMisplacedLetters(
        getMisplacedLetters(letters, exercise.word)
      );
    }
  }

  const displayHint = !!misplacedLetters.length;

  return (
    <ExerciseWrapper>
      <h1> Drag and Drop the letters until to make the right word</h1>
      <Card>
        <DraggableWord
          letters={letters}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          misplacedLetters={misplacedLetters}
        />
        <UtterButton word={exercise.word} />
      </Card>
      {displayHint && (
        <p> Try moving the highligthed letters! </p>
      )}
      <Actions>
        <Button
          fullWidth
          text="Review"
          onClick={reviewAnswer}
        />
      </Actions>
    </ExerciseWrapper>
  );
};

export default Exercise;
