import "../style/BrandShowcase.css";
import { Link } from "react-router-dom";

function BrandShowcase() {
  const brands = [
    { name: "DIOR", logo: "/images/CD.png", link: "/brands/1" },
    { name: "CHANEL", logo: "/images/chanel.png", link: "/brands/2" },
    { name: "LANCOME", logo: "/images/LANCOME.png", link: "/brands/4" },
    { name: "ESTÉE LAUDER", logo: "/images/Estée Lauder.png", link: "/brands/3" },
  ];

  return (
    <section className="brand-showcase-section">
      <div className="brand-header">
        <h2>Featured Brands</h2>
        <a href="/brands">View all Brands</a>
      </div>
       <br></br>
      <div className="brand-showcase">
        {brands.map((brand, index) => (
          <Link to={brand.link} key={index} className="brand-logo">
            <img src={brand.logo} alt={brand.name} />
          </Link>
        ))}
      </div>
    </section>
  );
}

export default BrandShowcase;