// Define a functional component called Navbar that returns a navigation menu
export default function Navbar() {

// Render a <nav> element with the class "nav"
    return <nav className="nav">
{/* Render a link to the homepage with the class below*/}      
      <a href="/" className="site-title">Movie Data Base</a>
      <ul>
  
        <li className="active">
          <a href="/home">Home</a>
        </li> 
  
        <li>
          <a href="/Discover">Discover</a>
        </li>
        
        <li>
          <a href="/Movies">Movies</a>
        </li>
        <li>
          <a href="/Tv">Tv</a>
        </li>
      
      </ul>
  
    </nav>
  }

  