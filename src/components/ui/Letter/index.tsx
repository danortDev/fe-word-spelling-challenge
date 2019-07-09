import React, { FunctionComponent } from 'react';

import { Container } from './elements';

interface Props {
  letter: string;
  color?: string,
  background?: string,
  borderColor?: string
}

const Letter: FunctionComponent<Props> = ({
  letter,
  color,
  background,
  borderColor
}) => (
  <Container
    $color={color}
    $background={background}
    $borderColor={borderColor}
  >
    { letter }
  </Container>
);

export default Letter;
