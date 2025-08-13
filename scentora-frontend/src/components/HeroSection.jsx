import { Link } from "react-router-dom";
import "../style/HeroSection.css";

function HeroSection() {
  return (
    <section className="hero">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/videos/hero-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Discover Our Latest Collection</h1>
        <p>Shop the best products from top brands and enjoy exclusive offers.</p>
        <br></br>
        <Link to="/products" className="shop-now-btn">
          Shop Now
        </Link>
      </div>
    </section>
  );
}

export default HeroSection;