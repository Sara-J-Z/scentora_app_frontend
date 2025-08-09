import { useState } from "react";

function NewsletterSignup() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Subscribed with:", email);
    setEmail(""); 
  };

  return (
    <section className="p-4 text-center bg-gray-100 rounded-2xl my-4">
      <h3 className="text-xl font-semibold mb-2">Join Our Newsletter</h3>
      <form onSubmit={handleSubmit} className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center">
        <input
          type="email"
          required
          placeholder="Enter your email"
          className="p-2 rounded border w-full sm:w-64"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
          Subscribe
        </button>
      </form>
    </section>
  );
}

export default NewsletterSignup;
