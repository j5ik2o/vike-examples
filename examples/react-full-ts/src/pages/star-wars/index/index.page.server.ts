import fetch from "node-fetch";
import { filterMovieData } from "../filterMovieData";
import type { Movie, MovieDetails } from "../types";

const onBeforeRender = async () => {
  await sleep(700); // Simulate slow network
  const movies = await getStarWarsMovies();

  return {
    pageContext: {
      pageProps: {
        // We remove data we don't need because we pass `pageContext.movies` to
        // the client; we want to minimize what is sent over the network.
        movies: filterMoviesData(movies),
      },
      // The page's <title>
      documentProps: { title: getTitle(movies) },
    },
  };
};

const getStarWarsMovies = async () => {
  const response = await fetch("https://star-wars.brillout.com/api/films.json");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let movies: MovieDetails[] = ((await response.json()) as any).results;
  movies = movies.map((movie: MovieDetails, i: number) => ({
    ...movie,
    id: String(i + 1),
  }));
  return movies;
};

function filterMoviesData(movies: MovieDetails[]): Movie[] {
  return movies.map((movie: MovieDetails) => {
    const { title, release_date, id } = movie;
    return { title, release_date, id };
  });
}

const prerender = async () => {
  const movies = await getStarWarsMovies();

  return [
    {
      url: "/star-wars",
      // We already provide `pageContext` here so that `vite-plugin-ssr`
      // will *not* have to call the `onBeforeRender()` hook defined
      // above in this file.
      pageContext: {
        pageProps: {
          movies: filterMoviesData(movies),
        },
        documentProps: { title: getTitle(movies) },
      },
    },
    ...movies.map((movie) => {
      const url = `/star-wars/${movie.id}`;
      return {
        url,
        // Note that we can also provide the `pageContext` of other pages.
        // This means that `vite-plugin-ssr` will not call any
        // `onBeforeRender()` hook and the Star Wars API will be called
        // only once (in this `prerender()` hook).
        pageContext: {
          pageProps: {
            movie: filterMovieData(movie),
          },
          documentProps: { title: movie.title },
        },
      };
    }),
  ];
};

const getTitle = (movies: MovieDetails[]) => {
  `${movies.length} Star Wars Movies`;
};

const sleep = (milliseconds: number) =>
  new Promise((r) => setTimeout(r, milliseconds));

export { onBeforeRender, prerender };
