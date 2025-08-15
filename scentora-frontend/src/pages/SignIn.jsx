import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInUser } from "../services/Auth";
import "../style/SignInPage.css";

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();

  const initialState = { username: "", password: "" };

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = await SignInUser(formValues);
      setFormValues(initialState);
      setUser(payload);
      navigate("/movies");
    } catch (error) {
      alert("Failed to sign in. Please check your credentials.");
    }
  };

  return (
    <div className="page-container">
      <label htmlFor="col" className="page-title">
        Sign In
      </label>

      <form className="form-card" id="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="Your username"
            value={formValues.username}
            required
            autoComplete="username"
            className="userlogin"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password" className="input-label">
            Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="password"
            value={formValues.password}
            required
            className="passLogin"
          />
        </div>
        <div className="btn-container">
          <button
            className="btn-primary"
            disabled={!formValues.username || !formValues.password}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="link-container">
        <span className="link-text">Don't have an Account?</span>
        <Link to="/register" id="linkReg" className="link-primary">
          Register
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
