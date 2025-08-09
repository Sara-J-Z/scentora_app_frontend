import { useEffect, useState } from "react";
import axios from "axios";
import ProductGrid from "../components/ProductGrid";
import FilterSidebar from "../components/FilterSidebar";
import "../style/AllProductsPage.css"; 

function AllProductsPage() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [brand, setBrand] = useState("All");
  const [sort, setSort] = useState("default");

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/products/")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => console.error("Failed to fetch products:", err));
  }, []);

  useEffect(() => {
    let updated = [...products];

    if (brand !== "All") {
      updated = updated.filter((p) => p.brand.name === brand);
    }

    if (sort === "priceLowHigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sort === "priceHighLow") {
      updated.sort((a, b) => b.price - a.price);
    }

    setFilteredProducts(updated);
  }, [brand, sort, products]);

  return (
    <main className="all-products-layout">
      <FilterSidebar
        selectedBrand={brand}
        setBrand={setBrand}
        selectedSort={sort}
        setSort={setSort}
        allProducts={products}
      />
      <div className="products-wrapper">
        <h1>All Products</h1>
        <ProductGrid products={filteredProducts} />
      </div>
    </main>
  );
}

export default AllProductsPage;
