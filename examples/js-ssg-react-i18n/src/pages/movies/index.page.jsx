import React from "react";
import { LocaleText } from "../../renderer/LocaleText";

const Page = (pageProps) => {
  return (
    <>
      <h1>
        Star Wars <LocaleText>Movies</LocaleText>
      </h1>
      <MovieList movies={pageProps.movies} />
    </>
  );
};

const MovieList = ({ movies }) => {
  return (
    <ol>
      {movies.map(({ title, release_date }, i) => (
        <li key={i}>
          {title} ({release_date})
        </li>
      ))}
    </ol>
  );
};

export { Page };
