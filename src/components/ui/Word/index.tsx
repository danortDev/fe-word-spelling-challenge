import React, { useState, useEffect, FunctionComponent } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import Letter from 'app/components/ui/Letter';
import { Container } from './elements';

const WORD: string = "bazinga";

const reorder = (
  letters: string[],
  startIndex: number,
  endIndex: number
) => {
  const result = Array.from(letters);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const Word: FunctionComponent = () => {
  const [letters, setLetters] = useState<string[]>([]);

  useEffect(() => {
    setLetters(WORD.split(""));
  }, []);

  const onDragEnd = (result: any) => {
    const { source, destination } = result;
    if (!destination) return;
    const reorderedLetters = reorder(
      letters,
      source.index,
      destination.index
    );

    setLetters(reorderedLetters as string[]);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="letters"
        direction="horizontal"
      >
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <Container>
              {letters.map((letter: string, index: number) => (
                <Draggable
                  key={index}
                  index={index}
                  draggableId={index + letter}
                >
                  {(provided) => (
                    <div
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                    <Letter letter={letter} />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Container>
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
};

export default Word;
