import "../style/FeaturedProducts.css";
import { Link } from "react-router-dom";

function FeaturedProducts() {
  const products = [
    { name: "Bleu de Chanel", image: "/images/Bleu de Chanel.jpeg", price: "BHD 90.00", link: "/products/2" },
    { name: "Miss Dior Eau de Parfum", image: "/images/Miss Dior Eau de Parfum.jpeg", price: "BHD 80.00", link: "/products/1" },
    { name: "Estée Lauder Double Wear Foundation", image: "/images/Estée Lauder Double Wear Foundation.jpeg", price: "BHD 30.90", link: "/products/13" },
    { name: "Rouge Dior Lipstick", image: "/images/Rouge Dior Lipstick.jpeg", price: "BHD 39.99", link: "/products/11" },
    { name: "Lancôme la vie est belle eau de parfum", image: "/images/lancôme la vie est belle eau de parfum.jpeg", price: "BHD 50.00", link: "/products/4" },
    
  ];

  return (
    <section className="featured-products">
      <h2 className="featured-title">Featured Products</h2>
      <div className="product-grid-wrapper">
        <div className="product-grid">
          {products.map((prod, index) => (
            <Link to={prod.link} key={index} className="product-card">
              <img src={prod.image} alt={prod.name} />
              <h3>{prod.name}</h3>
              <p className="price">{prod.price}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProducts;
