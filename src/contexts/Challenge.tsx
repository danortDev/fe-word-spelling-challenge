import React, { useContext, useState, useMemo, FunctionComponent } from 'react';

export interface Exercise {
  word: string,
  scrambled: string,
  answer: string
}

const initialState = {
  exercises: [
    { word: 'welcome', scrambled: 'wlcmeoe' },
    { word: 'bye', scrambled: 'ybe' }
  ],
  currentExercise: {
    word: 'welcome',
    scrambled: 'wlcmeoe',
    answer: 'welcome'
  }
};

const ChallengeContext = React.createContext({});

export const ChallengeProvider: FunctionComponent = ({
  children
}) => {
  const [challenges, setChallenges] = useState(initialState);
  const contextValue = useMemo(() => [challenges, setChallenges], [challenges]);
  return (
    <ChallengeContext.Provider value={contextValue}>
      { children }
    </ChallengeContext.Provider>
  );
};

export const useChallengeContext = (): any => useContext(ChallengeContext);
