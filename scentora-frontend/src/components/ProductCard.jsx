import "../style/ProductCard.css";
import { Link } from "react-router-dom"; 

function ProductCard({ product }) {
  return (
    <div className="product-card">
            <img src={`http://127.0.0.1:8000${product.image}`} alt={product.name} />
      <h3>{product.name}</h3>
      <p className="price">BHD {product.price}</p>
      
      <Link to={`/products/${product.id}`}>
        <button className="view-button">View Details</button>
      </Link>
    </div>
  );
}

export default ProductCard;
