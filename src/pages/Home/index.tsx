import React from 'react';
import AppBar from 'app/components/ui/AppBar';
import Button from 'app/components/ui/Button';
import Word from 'app/components/ui/Word';
import WordPronunciationButton from 'app/components/challenge/WordPronunciationButton';
import { MainContainer, ChallengeWrapper, Card, Actions } from './elements';

const Home = () => (
  <div>
    <AppBar />
    <MainContainer>
      <ChallengeWrapper>
        <Card>
          <Word />
          <WordPronunciationButton
            word="bazinga"
          />
        </Card>
        <Actions>
          <Button
            fullWidth
            text="Review"
            onClick={() => {}}
          />
        </Actions>
      </ChallengeWrapper>
    </MainContainer>
  </div>
);

export default Home;
