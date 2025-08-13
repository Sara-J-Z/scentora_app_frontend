import React from "react";
import { Link } from "react-router-dom";
import "../style/BrandCard.css";

function BrandCard({ brand }) {
  return (
    <Link to={`/brands/${brand.id}`} className="brand-card">
      <img src={brand.logo} alt={brand.name} />
      <h2>{brand.name}</h2>
    </Link>
  );
}

export default BrandCard;
