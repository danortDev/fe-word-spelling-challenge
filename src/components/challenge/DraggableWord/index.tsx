import React, { FunctionComponent } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import Letter from 'app/components/ui/Letter';
import { Container } from './elements';
import  getLetterStyleModifiers from './getLetterStyleModifiers';

interface Props {
  letters: string[];
  misplacedLetters: number[];
  onDragStart: () => any;
  onDragEnd: (result: DropResult) => any;
}

const DraggableWord: FunctionComponent<Props> = ({
  letters,
  onDragStart,
  onDragEnd,
  misplacedLetters
}) => (
  <DragDropContext
    onDragStart={onDragStart}
    onDragEnd={onDragEnd}
  >
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
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <Letter
                      letter={letter}
                      {...getLetterStyleModifiers(
                        !!misplacedLetters.includes(index),
                        snapshot.isDragging
                      )}
                    />
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
);

export default DraggableWord;
