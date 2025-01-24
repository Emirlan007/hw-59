import React from 'react';
import MovieItem from '../MovieItem/MovieItem.tsx';
import { MovieListProps } from '../../types';

const MovieList: React.FC<MovieListProps> = ({ movies, onTitleChange, onDelete }) => {
  return (
    <div className="content-list">
      {movies.map((movie) => (
        <MovieItem
          key={movie.id}
          movie={movie}
          onTitleChange={onTitleChange}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default MovieList;
