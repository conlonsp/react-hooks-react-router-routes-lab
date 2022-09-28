import React from "react";
import { actors } from "../data";

function Actors() {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors.map(actor => {
        return (
          <div key={actor.name}>
            {actor.name}
            <ul>
              {actor.movies.map(movie => {
                return (
                  <li key={movie}>{movie}</li>
                )
              })}
            </ul>
          </div>
        )
      })}
    </div>
  )
}

export default Actors;

// This component should render the text Actors Page in an <h1>, and make a new <div> for each actor. The <div> should contain the actor's name and a <ul> with a list of their movies.