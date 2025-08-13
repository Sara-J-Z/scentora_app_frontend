import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../style/BrandDetail.css";

function BrandDetail() {
  const { id } = useParams();
  const [brand, setBrand] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/brands/${id}/`)
      .then((res) => res.json())
      .then((data) => {
        setBrand(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching brand:", err);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="loading">Loading brand...</p>;
  if (!brand) return <p className="error">Brand not found</p>;

  return (
    <div className="brand-detail">
      <div className="brand-header">
  <img src={brand.logo} alt={brand.name} className="brand-detail-image" />
  <div className="brand-name">
    <h2>{brand.name}</h2>
  </div>
</div>

      <p className="brand-description">{brand.description}</p>

      <h2>Products</h2>
      <div className="products-list">
        {brand.products && brand.products.length > 0 ? (
          brand.products.map((product) => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>BHD {product.price}</p>
            </div>
          ))
        ) : (
          <p>No products available for this brand.</p>
        )}
      </div>
    </div>
  );
}

export default BrandDetail;
