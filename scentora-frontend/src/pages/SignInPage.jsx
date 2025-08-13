import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { SignInUser } from "../services/auth";
import "../style/SignInPage.css";

const SignIn = ({ setUser }) => {
  const navigate = useNavigate();

  const initialState = { email: "", password: "" };

  const [formValues, setFormValues] = useState(initialState);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Submitting form with values:", formValues);
    try {
      console.log("Submitting form with values: in try", formValues);
      const payload = await SignInUser(formValues);
      setFormValues(initialState);
      setUser(payload);
      navigate("/");
    } catch (error) {
      console.log("Error during sign in:", error);
    }
  };

  return (
    <div className="page-container">
      <label htmlFor="col" className="page-title">
        Sign In
      </label>

      <form className="form-card" id="col" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="Your email"
            value={formValues.email}
            required
            autoComplete="email"
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
            disabled={!formValues.email || !formValues.password}
          >
            Sign In
          </button>
        </div>
      </form>
      <div className="link-container">
        <span className="link-text">Don't have an Account? </span>
        <Link to="/register" id="linkReg" className="link-primary">
           Register
        </Link>
      </div>
    </div>
  );
};

export default SignIn;
