// https://vite-plugin-ssr.com/onBeforeRender

import {
  filterMoviesData,
  getStarWarsMovies,
  getTitle,
} from "./getStarWarsMovies";

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
      title: getTitle(movies),
    },
  };
};

const sleep = (milliseconds: number): Promise<void> => {
  return new Promise((r) => setTimeout(r, milliseconds));
};

export default onBeforeRender;
