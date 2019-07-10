import React, { useContext, useState, useMemo, FunctionComponent } from 'react';

export interface Exercise {
  word: string,
  scrambled: string,
  answer: string
}

const initialState = {
  exercises: [
    { word: 'welcome', scrambled: 'wlcmeoe' },
    { word: 'golda', scrambled: 'gldoa' },
    { word: 'bye', scrambled: 'ybe' }
  ],
  currentExercise: {
    index: 0,
    word: 'welcome',
    scrambled: 'wlcmeoe'
  },
  solved: false
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
