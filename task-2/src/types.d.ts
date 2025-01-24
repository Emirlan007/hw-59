export interface JokeResponse {
  value: string;
}

export interface JokeDisplayProps {
  joke: string;
  hasJoke: boolean;
}

export  interface FetchJokeButtonProps {
  onClick: () => void;
}