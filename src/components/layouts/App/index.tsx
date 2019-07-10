import React, { Fragment, FunctionComponent } from 'react';
import AppBar from 'app/components/ui/AppBar';
import { MainContainer } from './elements';

const App: FunctionComponent = ({ children }) => (
  <Fragment>
    <AppBar />
    <MainContainer>
      { children }
    </MainContainer>
  </Fragment>
);

export default App;
