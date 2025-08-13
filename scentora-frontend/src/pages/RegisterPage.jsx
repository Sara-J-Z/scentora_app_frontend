import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { RegisterUser } from "../services/auth";
import "../style/RegisterPage.css";
const Register = () => {
  let navigate = useNavigate();

  const initialState = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    date_of_birth: "",
    phone_number: "",
    address: "",
    gender: "",
  };

  const [formValues, setFormValues] = useState(initialState);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError(null);

    const payload = {
      username: formValues.username,
      email: formValues.email,
      password: formValues.password,
      date_of_birth: formValues.date_of_birth,
      phone_number: formValues.phone_number || null,
      address: formValues.address || null,
      gender: formValues.gender || null,
    };

    try {
      await RegisterUser(payload);
      setFormValues(initialState);
      navigate("/signin");
    } catch (err) {
      setError("Registration failed. Please check your inputs.");
    }
  };

  return (
    <div className="page-container">
      <label htmlFor="col" className="Page-title">
        Register
      </label>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <form onSubmit={handleSubmit} className="form-card" id="col">
        <div className="input-wrapper">
          <label htmlFor="username" className="input-label">
            Username
          </label>
          <input
            onChange={handleChange}
            id="username"
            type="text"
            placeholder="johndoe"
            value={formValues.username}
            required
            autoComplete="username"
            className="nameReg"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <input
            onChange={handleChange}
            id="email"
            type="email"
            placeholder="example@example.com"
            value={formValues.email}
            required
            autoComplete="email"
            className="emailReg"
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
            className="passReg"
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="confirmPassword" className="input-label">
            Confirm Password
          </label>
          <input
            onChange={handleChange}
            type="password"
            id="confirmPassword"
            value={formValues.confirmPassword}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="date_of_birth" className="input-label">
            Date of Birth
          </label>
          <input
            onChange={handleChange}
            type="date"
            id="date_of_birth"
            value={formValues.date_of_birth}
            required
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="phone_number" className="input-label">
            Phone Number
          </label>
          <input
            onChange={handleChange}
            id="phone_number"
            type="tel"
            placeholder="+1234567890"
            value={formValues.phone_number}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="address" className="input-label">
            Address
          </label>
          <input
            onChange={handleChange}
            id="address"
            type="text"
            placeholder="123 Main St"
            value={formValues.address}
          />
        </div>

        <div className="input-wrapper">
          <label htmlFor="gender" className="input-label">
            Gender
          </label>
          <select
            name="gender"
            id="gender"
            value={formValues.gender}
            onChange={handleChange}
          >
            <option value="">Select gender</option>
            <option value="M">Male</option>
            <option value="F">Female</option>
          </select>
        </div>

        <div className="btn-container">
          <button
            className="btn-primary"
            disabled={
              !formValues.email ||
              !formValues.password ||
              formValues.password !== formValues.confirmPassword
            }
          >
            Register
          </button>
        </div>
      </form>


      <div className="link-container">
        <span className="link-text">Already have an Account? </span>
        <Link to="/signin" className="link-primary">
           Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
