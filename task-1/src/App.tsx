import React, { useState, } from 'react';
import './App.css';
import { Movie } from './types';
import MovieList from './components/MovieList/MovieList.tsx';


const App = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [newMovie, setNewMovie] = useState('');

  const handleAddMovie = (e: React.FormEvent) => {
    e.preventDefault();
    if (newMovie.trim()) {
      setMovies((prevMovies) => [
        { id: Math.random(), title: newMovie.trim() },
        ...prevMovies,
      ]);
      setNewMovie('');
    }
  };

  const handleDeleteMovie = (id: number) => {
    setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id));
  };

  const handleTitleChange = (id: number, newTitle: string) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) =>
        movie.id === id ? { ...movie, title: newTitle } : movie
      )
    );
  };

  return (
    <div>
      <form className="field" onSubmit={handleAddMovie}>
        <input
          className="inputText"
          type="text"
          placeholder="Enter movie name"
          value={newMovie}
          onChange={(e) => setNewMovie(e.target.value)}
          required
        />
        <button className="btnAdd" type="submit">Add</button>
      </form>
      <h3 className="title">To watch list</h3>
      <div className="content">
        <MovieList
          movies={movies}
          onTitleChange={handleTitleChange}
          onDelete={handleDeleteMovie}
        />
      </div>
    </div>
  );
};

export default App;
