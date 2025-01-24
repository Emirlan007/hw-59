import React from 'react';
import { MovieItemProps } from '../../types';

const MovieItem = React.memo(({ movie, onTitleChange, onDelete }: MovieItemProps) => {
  return (
    <div className="movie-items">
      <input
        className="movie-item"
        value={movie.title}
        onChange={(e) => onTitleChange(movie.id, e.target.value)}
      />
      <button className="btnDelete" onClick={() => onDelete(movie.id)}>
        Delete
      </button>
    </div>
  );
});

export default MovieItem;
