import React, { FunctionComponent } from 'react';
import { Bar, Progress } from './elements';

interface Props {
  progress: number
}

const ProgressBar: FunctionComponent<Props> = ({ progress }) => (
  <Bar>
    <Progress $progress={progress} />
  </Bar>
);

export default ProgressBar;
