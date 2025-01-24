export interface Movie {
  title: string;
  id: number;
}

export interface MovieItemProps {
  movie: Movie;
  onTitleChange: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}

interface MovieListProps {
  movies: Movie[];
  onTitleChange: (id: number, newTitle: string) => void;
  onDelete: (id: number) => void;
}