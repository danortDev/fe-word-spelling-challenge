import React, { FunctionComponent } from 'react';
import { Container, IconWrapper } from './elements';

interface Props {
  text?: string;
  Icon?: FunctionComponent;
  fullWidth?: boolean;
  onClick: () => any;
}

const Button: FunctionComponent<Props> = ({
  text,
  Icon,
  fullWidth,
  onClick
}) => (
  <Container
    onClick={onClick}
    $fullWidth={!!fullWidth}
    $iconButton={!!Icon}
  >
    {!!Icon && (
      <IconWrapper>
        <Icon />
      </IconWrapper>
    )}
    {!!text && text}
  </Container>
);

export default Button;
