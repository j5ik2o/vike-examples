// import React from "react";
import type { MovieDetails } from "../types";

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
export default Page;
