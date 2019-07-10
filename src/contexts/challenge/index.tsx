import React, { useContext, useState, useMemo, FunctionComponent } from 'react';

export interface Exercise {
  word: string,
  scrambled: string
}

const initialState = {
  exercises: [],
  currentExercise: {},
  currentIndex: 0,
  solved: false,
  loading: true,
  error: false
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
