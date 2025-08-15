// import { Link } from "react-router-dom";
// import "../style/Nav.css";


// const Nav = ({ user, handleLogOut }) => {
//   const signedInLinks = (
//     <>
//       <Link to="/">Home</Link>
//       <Link to="/about">About Us</Link>
//       <Link to="/profile">Profile</Link>
//       <Link onClick={handleLogOut} to="/">
//         Logout
//       </Link>
//     </>
//   );

//   const publicLinks = (
//     <>
//       <Link to="/">Home</Link>
//       <Link to="/about">About Us</Link>
//       <Link to="/signin">Sign In</Link>
//       <Link to="/register">Register</Link>
//     </>
//   );



//   return (
//     <header>
//       {/* Logo on the left */}
//       <Link to="/">
//         <img className="logo" src="/images/logo.png" alt="logo" />
//       </Link>

//       {/* Navigation links */}
//       <nav>
//         {user ? signedInLinks : publicLinks}
//       </nav>
//     </header>
//   );
// };

// export default Nav;
