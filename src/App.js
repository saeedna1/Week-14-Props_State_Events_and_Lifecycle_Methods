//importing necessary components and styles from external files
import { useEffect, useState } from "react";
import MovieList from "./MovieList";
import './App.css';
import "./Navbar.css";
import styles from "./styles.css";
import { FaStar } from "react-icons/fa";
// Defining colors to be used for the star ratings
const colors = {
  orange: "#FFBA5A",
  grey: "#a9a9a9",
};

// Defining the URL of the OMDB API to fetch movie data
const API_URL = "http://www.omdbapi.com/?apikey=8017b93b&";
// Creating an array of 5 elements to represent the 5 stars for rating movies
const stars = Array(5).fill(0);
// Creating a search bar that takes a search function as a prop
const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

 // Handler function to call the search function with the search term when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    //form with input field and search button
    <form onSubmit={handleSubmit}>
      <div className="search">
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search for a movie..."
      />
        <button className="button" type="submit"><i href="#"class="fa fa-search">Search</i></button> 
      </div>
      
    </form>
  );
};
  //App component
const App = () => {
  // Setting up state variables for the movies, current star rating, and hover state of stars
  const [movies, setMovies] = useState([]);
  const [currentValue, setCurrentValue] = useState(0);
  const [hoverValue, setHoverValue] = useState(undefined);

  // Handler function to update the current star rating when a star is clicked
  const handleClick = (value) => {
    setCurrentValue(value);
  };

  // Handler function to update the hover state of the stars when the mouse is moved over them
  const handleMouseOver = (newHoverValue) => {
    setHoverValue(newHoverValue);
  };

  // Handler function to reset the hover state of the stars when the mouse leaves the container
  const handleMouseLeave = () => {
    setHoverValue(undefined);
  };

  // Async function to fetch movie data from the OMDB API based on a search term
  const searchMovie = async (title) => {
    const response = await fetch(`${API_URL}s=${title}`);
    const data = await response.json();
    setMovies(data.Search);
  };
 
  // UseEffect hook to fetch movie data on initial render
  useEffect(() => {
    searchMovie("Harry");
  }, []);

  return (
    //div container for the app
    <div className="app">
      {/* Conditional rendering of movie data or empty message if no movies are found */}
      <SearchBar onSearch={searchMovie} />
      {movies?.length > 0 ? (
 //If there are movies, the movies are mapped over and rendered as individual 
 //movie containers with the movie data passed down as a prop to the MovieList component.
        movies.map((movie) => (
          <div key={movie.imdbID} className="movie-container">
            <MovieList movie={movie} />
       {/* Star rating component using the FaStar icon from react-icons */}      
            <div className={`${styles.stars} stars`}>
              {stars.map((_, index) => (
        //The component is rendered for each movie and the colors of the stars are updated 
        //based on whether the user hovers over the star or clicks on it.        
                <FaStar
                  key={index}
                  size={24}
                  onClick={() => handleClick(index + 1)}
                  onMouseOver={() => handleMouseOver(index + 1)}
                  onMouseLeave={handleMouseLeave}
                  color={
                    (hoverValue || currentValue) > index
                      ? colors.orange
                      : colors.grey
                  }
                  style={{
                    marginRight: 10,
                    cursor: "pointer",
                    

                  }}
                />
              ))}
            </div>
            {/* review box is displayed below each movie for the user to input their review. */}
            <div className="reviewBox">
              <textarea
                placeholder="What's your experience?"
                className={`${styles.textarea} my-textarea`}
              />
            </div>
            {/*submit and delete button*/}
            <div className={styles.buttonsContainer}>
              <div className="reviewbutton">
                <button className={styles.addButton}>Submit Review</button>
                <button className={styles.deleteButton}>Delete Review</button>
              </div>
            </div>
          </div>
        ))
      ) : (
        // if ther is no any movie to display massage will be Pop up
        <div className="empty">
          <h2>No movies found please search again</h2>
        </div>
      )}
    </div>
  );
};
//default export of the module.
export default App;

