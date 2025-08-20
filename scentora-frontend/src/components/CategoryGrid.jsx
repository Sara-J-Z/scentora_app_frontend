import React from 'react';
import { Link } from 'react-router-dom';
import "../style/CategoryGrid.css";


function CategoryGrid({ categories }) {
  if (!categories || categories.length === 0) {
    return <p className="text-center text-gray-500">No categories available</p>;
  }

  return (
    <section className="py-12 bg-gray-50 text-center">
      <h2 className="text-2xl font-bold mb-6">Shop by Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
        {categories.map((category) => (
          <Link
            to={`/products/category/${category.id}`} 
            key={category.id }
            className="subcategory-link"
          >
            <div className ="image-wrapper">
              <img
                src={category.icon}
                alt={category.name}
                className="category-image"  
              />
            </div>

            <span className="subcategory-name">{category.name}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
