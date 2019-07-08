import React from 'react';
import AppBar from 'app/components/ui/AppBar';
import Word from 'app/components/ui/Word';
import { MainContainer, Card } from './elements';

const Home = () => (
  <div>
    <AppBar />
    <MainContainer>
      <Card>
        <Word />
      </Card>
    </MainContainer>
  </div>
);

export default Home;
