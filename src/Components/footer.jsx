import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="mainnav">
    <nav className="footer">
      <div className="footermenu">
      <Link to="/" className="footer-link">Home</Link><br></br>
      <Link to="/populardrinks" className="footer-link">Popular</Link>
      </div>
    </nav>
    </div>
  );
};

export default Footer;