import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="mainnav">
    <nav className="navbar">
      <Link to="/" className="navbar-item">Home</Link>
      <span> | </span>
      <Link to="/populardrinks" className="navbar-item">Popular</Link>
    </nav>
    </div>
  );
};

export default Nav;
