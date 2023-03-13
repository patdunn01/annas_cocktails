import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainnav">
    <nav className="footer">
      <Link to="/" className="footer-link">Home</Link>
      <Link to="/populardrinks" className="footer-link">Popular</Link>
      <Link to="/populardrinks" className="footer-link">Story</Link>
      <Link to="/populardrinks" className="footer-link">Cookies</Link>
      <Link to="/populardrinks" className="footer-link">Privacy</Link>
      <Link to="/populardrinks" className="footer-link">Terms & Conditions</Link>
    </nav>
    </div>
  );
};

export default Footer;