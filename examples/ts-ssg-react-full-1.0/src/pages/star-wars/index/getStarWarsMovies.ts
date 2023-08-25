import fetch from "node-fetch";
import type { Movie, MovieDetails } from "../types";

const getStarWarsMovies = async (): Promise<MovieDetails[]> => {
  const response = await fetch("https://star-wars.brillout.com/api/films.json");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let movies: MovieDetails[] = ((await response.json()) as any).results;
  movies = movies.map((movie: MovieDetails, i: number) => ({
    ...movie,
    id: String(i + 1),
  }));
  return movies;
};

const filterMoviesData = (movies: MovieDetails[]): Movie[] => {
  return movies.map((movie: MovieDetails) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
};

const getTitle = (movies: Movie[] | MovieDetails[]): string => {
  const title = `${movies.length} Star Wars Movies`;
  return title;
};

export { filterMoviesData, getStarWarsMovies, getTitle };
