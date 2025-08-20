import { Link, useNavigate } from "react-router-dom";
import { useState} from "react";
import "../style/Nav.css";


const Nav = ({ user, handleLogout }) => {
  const navigate = useNavigate();

  const signedInLinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/profile">Profile</Link>
      <button onClick={() => {
        handleLogout();
        navigate("/");
      }}>
        Sign Out
      </button>
    </>
  );

  const publicLinks = (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">About Us</Link>
      <Link to="/signin">Sign In</Link>
      <Link to="/register">Register</Link>
    </>
  );

  return (
    <header>
      <Link to="/">
        <img className="logo" src="/images/logo.png" alt="logo" />
      </Link>

      <nav>
        {user ? signedInLinks : publicLinks}
      </nav>
    </header>

  );
};

export default Nav;
