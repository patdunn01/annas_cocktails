import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mainnav">
    <nav className="navbar">
      <Link to="/" className="first-navbar-item">Home</Link>
      
      <Link to="/populardrinks" className="navbar-item">Popular Drinks</Link>
      
      <Link to="/randomCocktail" className="navbar-item">Something Different</Link>
      
      <Link to="/blog" className="navbar-item">Blog</Link>
      
      <Link to="/randomCocktail" className="navbar-item">Tickets</Link>
      
      <Link to="/randomCocktail" className="navbar-item">Shop</Link>
      
      <form action="">
        <input type="text" placeholder="search" className="searchbar"/>
      </form>
    </nav>
    </div>
  );
};

export default Nav;
