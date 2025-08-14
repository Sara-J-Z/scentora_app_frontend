import { useState } from "react";
import axios from "axios";
import "../style/NewsletterSignup.css";

function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://127.0.0.1:8000/api/newsletter/subscribe/", { email });
      setMessage("Thank you for subscribing!");
      setEmail("");
    } catch (err) {
      if (err.response?.status === 400) {
        setMessage("You are already subscribed!");
      } else {
        setMessage("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <section className="newsletter">
      <h3 className="newsletter-title">Join Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="newsletter-form">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="newsletter-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="newsletter-button">
          Subscribe
        </button>
      </form>
      {message && <p style={{ marginTop: "0.5rem", color: "#ab196c" }}>{message}</p>}
    </section>
  );
}

export default NewsletterSignup;
