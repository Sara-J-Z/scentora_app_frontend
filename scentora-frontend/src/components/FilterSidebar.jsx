import React from "react";
import "../style/FilterSidebar.css";

function FilterSidebar({ selectedBrand, setBrand, selectedSort, setSort, allProducts }) {
  const uniqueBrands = ["All", ...new Set(allProducts.map((p) => p.brand.name))];

  return (
    <aside className="filter-sidebar">
      <h3>Filter</h3>
      <div className="filter-group">
        <label>Brand:</label>
        <select value={selectedBrand} onChange={(e) => setBrand(e.target.value)}>
          {uniqueBrands.map((brand) => (
            <option key={brand}>{brand}</option>
          ))}
        </select>
      </div>

      <div className="filter-group">
        <label>Sort by Price:</label>
        <select value={selectedSort} onChange={(e) => setSort(e.target.value)}>
          <option value="default">Default</option>
          <option value="priceLowHigh">Low to High</option>
          <option value="priceHighLow">High to Low</option>
        </select>
      </div>
    </aside>
  );
}

export default FilterSidebar;
