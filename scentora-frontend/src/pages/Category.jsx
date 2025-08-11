import React from "react";
import "./App.css";

const Category = () => {
  const categories = [
    { name: "Perfumes", img: "/icons/perfumes.png" },
    { name: "Candles", img: "/icons/candles.png" },
    { name: "Oils", img: "/icons/oils.png" },
    { name: "Diffusers", img: "/icons/diffusers.png" },
  ];

  return (
    <div className="category-container">
      {categories.map((category, index) => (
        <div className="category-card" key={index}>
          <img
            src={category.img}
            alt={category.name}
            className="category-icon"
          />
          <p className="category-name">{category.name}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
