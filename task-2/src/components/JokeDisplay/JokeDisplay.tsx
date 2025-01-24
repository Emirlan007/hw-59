import React from 'react';
import { JokeDisplayProps } from '../../types';

const JokeDisplay: React.FC<JokeDisplayProps> = ({ joke, hasJoke }) => {
  return (
    <div className="joke-display">
      {!hasJoke ? 'Click the button to get a joke!' : joke}
    </div>
  );
};

export default JokeDisplay;