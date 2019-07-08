import tinycolor from 'tinycolor2';

interface Colours {
  [index:string] : string
}

const COLOURS: Colours = {
  PRIMARY: '#329AF0',
  PRIMARY_LIGHT: '#4DABF4',
  TEXT: '#343A40',
  TEXT_SECONDARY: '#495057',
  LIGHTGREY: '#868E96',
  BLACK: '#000000',
  WHITE: '#FFFFFF'
};

const getColor = (colorName: string) => {
  const color = COLOURS[colorName] || COLOURS['PRIMARY'];
  return tinycolor(color).clone();
};

export default getColor;
