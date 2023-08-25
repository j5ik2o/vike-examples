import fetch from "cross-fetch";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import { filterMovieData } from "./filterMovieData";
import type { MovieDetails } from "./types";

const Page = ({ movie }: { movie: MovieDetails }) => {
  return (
    <>
      <h1>{movie.title}</h1>
      Release Date: {movie.release_date}
      <br />
      Director: {movie.director}
      <br />
      Producer: {movie.producer}
    </>
  );
};

const onBeforeRender = async (pageContext: PageContextBuiltIn) => {
  const response = await fetch(
    `https://star-wars.brillout.com/api/films/${pageContext.routeParams.id}.json`,
  );
  let movie = (await response.json()) as MovieDetails;

  // We remove data we don't need because we pass `pageContext.movie` to
  // the client; we want to minimize what is sent over the network.
  movie = filterMovieData(movie);

  const { title } = movie;

  return {
    pageContext: {
      pageProps: {
        movie,
      },
      // The page's <title>
      title,
    },
  };
};

export { Page, onBeforeRender };