import React from 'react';
import { FetchJokeButtonProps } from '../../types';

const FetchJokeButton: React.FC<FetchJokeButtonProps> = ({ onClick }) => {
  return (
    <div>
      <button className="joke-button" onClick={onClick}>
        Get a New Joke
      </button>
    </div>
  );
};

export default FetchJokeButton;