import { Link } from "react-router-dom";
import HelloSvg from './NavBar_Components/home.js';
import DifferentSvg from './NavBar_Components/different.js'

const Nav = () => {
  return (
    <div className="mainnav">
    <nav className="navbar">
      <Link to="/annas_cocktails">
      <div className="button-container">
      <HelloSvg />
      </div>
      </Link>
      
      <Link to="/populardrinks" className="navbar-item">Popular Drinks</Link>
      
      <Link to="/randomCocktail">
      <div className="button-container">
      <DifferentSvg />
      </div>
      </Link>
      
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
