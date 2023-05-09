// Import the React library
import React from "react";

// Define the MovieList component as a functional component that takes in a 'movie' object as a prop
const MovieList = ({ movie }) => {
// Render a <div> element with the class "movie"  
  return (
    <div className="movie">
{/* Render a <div> element to display the movie's release year */}
      <div>
        <p>{movie.Year}</p>
      </div>
{/* Render an <img> element with the movie poster URL or a placeholder image if none is available */}
      <div>
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/400"
          }
          alt={movie.Title}/>
      </div>
{/* Render a <div> element to display the movie's type and title */}
      <div>
        <span>{movie.Type}</span>
        <h3>{movie.Title}</h3>
       
      </div>
    </div>
 

  );
};
// Export the MovieList component as the default export of this module
export default MovieList;