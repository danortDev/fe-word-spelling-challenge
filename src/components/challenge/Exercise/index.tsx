import React, { useState, useEffect, FunctionComponent } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import Button from 'app/components/ui/Button';
import DraggableWord from 'app/components/challenge/DraggableWord';
import UtterButton from 'app/components/challenge/UtterButton';
import { Exercise as ExerciseInterface } from 'app/contexts/challenge';
import { useMoveNext } from 'app/contexts/challenge/actions';
import reorderArray from 'app/utils/reorderArray';
import getMisplacedLetters from 'app/utils/getMisplacedLetters';
import * as Elements from './elements';

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
    setSolved(false);
    if (exercise && exercise.scrambled) {
      setLetters(exercise.scrambled.split(""));
    }
  }, [exercise]);

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
    <Elements.ExerciseWrapper>
      <Elements.Card>
        <UtterButton word={exercise.word} />
        <Elements.WordWrapper>
          <DraggableWord
            letters={letters}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            misplacedLetters={misplacedLetters}
          />
        </Elements.WordWrapper>
        <Elements.Title>
          Drag and Drop the letters to unscramble the word
        </Elements.Title>
      </Elements.Card>
      <Elements.BottomBar>
        {displayHint && (
          <Elements.Hint>
            Ops! Something doesn't seems right,
            try moving the highligthed letters!
          </Elements.Hint>
        )}
        {solved && (
          <Elements.Success>
            Correct!! that is the right answer,
            Click continue to keep going
          </Elements.Success>
        )}
        {!solved && (
          <Button
            text="Review"
            onClick={reviewAnswer}
          />
        )}
        {solved && (
          <Button
            text="Continue"
            onClick={moveNext}
          />
        )}
      </Elements.BottomBar>
    </Elements.ExerciseWrapper>
  );
};

export default Exercise;
