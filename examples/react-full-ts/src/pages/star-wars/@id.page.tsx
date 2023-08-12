import fetch from "cross-fetch";
import { filterMovieData } from "./filterMovieData";
import type { PageContextBuiltIn } from "vite-plugin-ssr/types";
import type { MovieDetails } from "./types";
import { RenderErrorPage } from "vite-plugin-ssr/RenderErrorPage";

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
  const dataUrl = `https://star-wars.brillout.com/api/films/${pageContext.routeParams.id}.json`;
  let response: Response;
  try {
    response = await fetch(dataUrl);
  } catch (err) {
    throw RenderErrorPage({
      pageContext: {
        pageProps: { errorDescription: `Couldn't fetch data ${dataUrl}` },
      },
    });
  }
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
      documentProps: {
        // The page's <title>
        title,
      },
    },
  };
};

export { Page, onBeforeRender };
