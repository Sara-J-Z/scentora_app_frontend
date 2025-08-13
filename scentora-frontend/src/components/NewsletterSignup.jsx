import { useState } from "react";
import "../style/NewsletterSignup.css";

function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail("");
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
    </section>
  );
}

export default NewsletterSignup;