import "../style/CategoryGrid.css";
import { Link } from "react-router-dom"; 

function CategoryGrid() {
  const categories = [
    { name: "Makeup", image: "/images/makeup.jpg", link: "/makeup" },
    { name: "Perfume", image: "/images/perfume.jpg", link: "/perfume" },
  ];

  return (
    <section className="category-grid-section">
      <h2 className="category-title">Shop by Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          <Link to={cat.link} key={index} className="category-card">
            <img src={cat.image} alt={cat.name} />
            <h3>{cat.name}</h3>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default CategoryGrid;
