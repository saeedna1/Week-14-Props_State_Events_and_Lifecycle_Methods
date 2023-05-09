// Import the React library
import React from "react";

// Import the Navbar component from "./Navbar"
import Navbar from './Navbar';
// Import the ReactDOM library
import ReactDOM from 'react-dom';
// Import the App component from "./App"
import App from "./App";

// Render the Navbar and App components inside a <React.StrictMode> element
// and mount it to the element with the ID "root" in the HTML file
ReactDOM.render(
    <React.StrictMode>
      <Navbar/>
      <App />
    </React.StrictMode>,
    document.getElementById('root')
  );

