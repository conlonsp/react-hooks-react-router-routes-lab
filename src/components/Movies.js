import React from "react";
import { movies } from "../data";

function Movies() {
  return (
    <div>
      <h1>Movies Page</h1>
      {movies.map(movie => {
        return (
          <div key={movie.title}>
            {movie.title} - {movie.time} minutes
            <ul>
              {movie.genres.map(genre => {
                return (
                  <li key={genre}>{genre}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Movies;

// This component should render the text Movies Page in an <h1>, and make a new <div> for each movie. The <div> should contain the movie's title, time and a <ul> with a list of its genres, each within their own <li>.
