import { Link } from "react-router-dom";
import "../style/Header.css"; 

function Header() {
  return (
    <header className="header">
      
      <Link to="/" className="logo-link">
        <img src="/images/logo.png" alt="Scentora Logo" className="logo" />
      </Link>

      
      <nav className="nav">
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/brands">Brands</Link></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
