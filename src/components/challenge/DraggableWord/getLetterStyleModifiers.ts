import getColor from 'app/palette';

interface LetterStyleModifiers {
  color: string;
  background: string,
  borderColor: string
}

const draggingModifiers = {
  color: getColor('WHITE').toHexString(),
  background: getColor('PRIMARY').toHexString(),
  borderColor: getColor('PRIMARY').darken(20).toHexString(),
};

const highlightedModifiers = {
  color: getColor('GREY').darken(20).toHexString(),
  background: getColor('LIGHTGREY').toHexString(),
  borderColor: getColor('GREY').darken(20).toHexString(),
};

const defaultModifiers = {
  color: getColor('PRIMARY').toHexString(),
  background: getColor('WHITE').toHexString(),
  borderColor: getColor('PRIMARY').lighten(20).toHexString(),
};

const getLetterStyleModifiers = (
  isMisplacedLetter: boolean,
  isDragging: boolean
): LetterStyleModifiers => {
  if (isMisplacedLetter) {
    return highlightedModifiers;
  } else if (isDragging) {
    return draggingModifiers;
  } else {
    return defaultModifiers;
  }
};

export default getLetterStyleModifiers;
