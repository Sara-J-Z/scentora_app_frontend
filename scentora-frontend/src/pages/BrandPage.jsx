import React, { useEffect, useState } from "react";
import BrandCard from "../components/BrandCard";
import "../style/BrandPage.css";

function BrandPage() {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/brands/")
      .then((res) => res.json())
      .then((data) => setBrands(data))
      .catch((error) => console.error("Error fetching brands:", error));
  }, []);

  return (
    <div className="brand-page">
      <h2>Our Brands</h2>
      <div className="brand-grid">
        {brands.map((brand) => (
          <BrandCard key={brand.id} brand={brand} />
        ))}
      </div>
    </div>
  );
}

export default BrandPage;
