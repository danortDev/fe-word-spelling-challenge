import React, { useState, useEffect, FunctionComponent } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Button from 'app/components/ui/Button';
import { Exercise as ExerciseInterface } from 'app/contexts/Challenge';
import DraggableWord from 'app/components/challenge/DraggableWord';
import UtterButton from 'app/components/challenge/UtterButton';
import { ExerciseWrapper, Card, Actions } from './elements';
import reorderArray from 'app/utils/reorderArray';
import getMisplacedLetters from 'app/utils/getMisplacedLetters'
interface Props {
  exercise: ExerciseInterface
}

const Exercise: FunctionComponent<Props> = ({
  exercise
}) => {
  const [letters, setLetters] = useState<string[]>([]);
  const [misplacedLetters, setMisplacedLetters] = useState<number[]>([]);

  useEffect(() => {
    if (exercise && exercise.scrambled) {
      setLetters(exercise.scrambled.split(""))
    }
  }, [exercise]);

  if (!exercise || !exercise.word) return null;

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
    if (answer === exercise.answer) {
      console.log('success');
    } else {
      setMisplacedLetters(
        getMisplacedLetters(letters, exercise.answer)
      );
    }
  }

  const displayHit = !!misplacedLetters.length;

  return (
    <ExerciseWrapper>
      <Card>
        <DraggableWord
          letters={letters}
          onDragStart={onDragStart}
          onDragEnd={onDragEnd}
          misplacedLetters={misplacedLetters}
        />
        <UtterButton word={exercise.word} />
      </Card>
      {displayHit && (
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
