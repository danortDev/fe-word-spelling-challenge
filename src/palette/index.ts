import tinycolor from 'tinycolor2';

interface Colours {
  [index:string] : string
}

const COLOURS: Colours = {
  PRIMARY: '#329AF0',
  PRIMARY_LIGHT: '#4DABF4',
  TEXT: '#343A40',
  TEXT_SECONDARY: '#868e96',
  GREY: '#868E96',
  LIGHTGREY: '#F8F9Fa',
  BLACK: '#000000',
  WHITE: '#FFFFFF',
  RED: '#90323d',
  GREEN: '#71B340'
};

const getColor = (colorName: string) => {
  const color = COLOURS[colorName.toUpperCase()] || COLOURS['PRIMARY'];
  return tinycolor(color).clone();
};

export default getColor;
