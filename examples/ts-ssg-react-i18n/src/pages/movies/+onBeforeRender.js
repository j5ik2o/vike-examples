import fetch from "node-fetch";

const onBeforeRender = async () => {
  const movies = await getMovies();
  const pageProps = { movies };
  return { pageContext: { pageProps } };
};

const getMovies = async () => {
  const resp = await fetch("https://star-wars.brillout.com/api/films.json");
  let movies = (await resp.json()).results;
  movies = reducePayload(movies);
  return movies;
};

const reducePayload = (movies) => {
  return movies.map((movie) => {
    const { title, release_date } = movie;
    return { title, release_date };
  });
};

export default onBeforeRender;
