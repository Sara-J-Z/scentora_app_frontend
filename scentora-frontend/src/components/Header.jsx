import { Link } from "react-router-dom";
import "../style/Header.css"; 

function Header({ user, handleLogOut }) {
  const signedInLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/profile">Profile</Link></li>
      <li>
        <Link onClick={handleLogOut} to="/">
          Logout
        </Link>
      </li>
    </>
  );

  const publicLinks = (
    <>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/signin">Sign In</Link></li>
      <li><Link to="/register">Register</Link></li>
    </>
  );

  return (
    <header className="header">
      <Link to="/" className="logo-link">
        <img src="/images/logo.png" alt="Scentora Logo" className="logo" />
      </Link>

      
      <nav className="nav">
        <ul>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/brands">Brands</Link></li>
          {user ? signedInLinks : publicLinks}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
