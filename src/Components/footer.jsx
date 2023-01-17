import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainnav">
    <nav className="footer">
      <Link to="/" className="navbar-item">Home</Link>
      <span> | </span>
      <Link to="/populardrinks" className="navbar-item">Popular</Link>
    </nav>
    </div>
  );
};

export default Footer;