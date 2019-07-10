import React from 'react';
import ReactDOM from 'react-dom';
import { ChallengeProvider } from 'app/contexts/challenge';
import { Provider as StyletronProvider } from 'styletron-react';
import { Client as Styletron } from 'styletron-engine-atomic';
import * as serviceWorker from './serviceWorker';

import Home from 'app/pages/Home';

// styles
import './css/reset.css';
import './css/fonts.css';

const engine = new Styletron();

ReactDOM.render(
  <ChallengeProvider>
    <StyletronProvider value={engine}>
      <Home />
    </StyletronProvider>
  </ChallengeProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
