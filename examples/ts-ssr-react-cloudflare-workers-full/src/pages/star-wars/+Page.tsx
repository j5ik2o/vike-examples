import { Suspense } from "react";
import { useAsync } from "react-streaming";
import { Counter } from "../../components/Counter";
import { usePageContext } from "../../renderer/usePageContext";

const Page = () => {
  return (
    <>
      <h1>Star Wars Movies</h1>
      Interactive while loading: <Counter />
      <Suspense fallback={<p>Loading...</p>}>
        <MovieList />
      </Suspense>
    </>
  );
};

const MovieList = () => {
  const pageContext = usePageContext();
  const movies = useAsync(["star-wars-movies"], async () => {
    const fetch = pageContext.fetch ?? globalThis.fetch;
    const response = await fetch(
      "https://star-wars.brillout.com/api/films.json",
    );
    // Simulate slow network
    await new Promise((r) => setTimeout(r, 2 * 1000));
    const movies = await getMovies(response);
    return movies;
  });
  return (
    <ol>
      {movies.map(({ id, title, release_date }: Movie) => (
        <li key={id}>
          {title} ({release_date})
        </li>
      ))}
    </ol>
  );
};

type Movie = {
  id: string;
  title: string;
  release_date: string;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getMovies = async (response: any): Promise<Movie[]> => {
  const moviesFromApi = (await response.json()).results as MovieFromApi[];
  const movies = cleanApiResult(moviesFromApi);
  return movies;
};

type MovieFromApi = {
  title: string;
  release_date: string;
  director: string;
  producer: string;
};

const cleanApiResult = (moviesFromApi: MovieFromApi[]): Movie[] => {
  const movies = moviesFromApi.map((movie, i) => {
    const { title, release_date } = movie;
    return {
      id: String(i + 1),
      title,
      release_date,
    };
  });
  return movies;
};

export default Page;
