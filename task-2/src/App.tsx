import './App.css';
import { useState } from 'react';
import { JokeResponse } from './types';
import JokeDisplay from './components/JokeDisplay/JokeDisplay.tsx';
import FetchJokeButton from './components/FetchJokeButton/FetchJokeButton.tsx';

const App = () => {

  const url = 'https://api.chucknorris.io/jokes/random';
  const [joke, setJoke] = useState('');
  const [hasJoke, setHasJoke] = useState(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data: JokeResponse = await response.json();
      setJoke(data.value);
      setHasJoke(true);
    }catch (error) {
      console.error('Error fetching joke:', error);
    }
  };

  return (
    <>
      <div className="joke-container">
        <h1 className="joke-title">Random Joke</h1>
        <FetchJokeButton onClick={fetchData} />
        <JokeDisplay joke={joke} hasJoke={hasJoke} />
      </div>
    </>
  );
};

export default App;
