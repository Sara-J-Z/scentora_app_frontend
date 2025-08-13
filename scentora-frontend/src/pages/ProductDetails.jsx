import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../style/ProductDetails.css";

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:8000/api/products/${id}`)
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.error("Product not found", err);
      });
  }, [id]);

  if (!product) return <p>Loading product...</p>;

  return (
  <div className="product-details-container">
    <h2>{product.name}</h2>
    <img
      className="product-details-image"
      src={product.image}
      alt={product.name}
    />

    <p className="product-details-price">Price: BHD {product.price}</p>

    <div className="product-details-info">
      <p><strong>Brand:</strong> {product.brand?.name || "N/A"}</p>
      <p><strong>Quantity:</strong> {product.quantity}</p>
      <p><strong>Description:</strong> {product.description}</p>
    </div>
  </div>
);
}

export default ProductDetails;
