import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ProductGrid from "../components/ProductGrid";
import { getProductsByCategory } from "../services/api";

function ProductsByCategoryPage() {
    const { categoryId } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    
    useEffect(() => {
        const fetchProducts = async () => {
            setLoading(true);
            setError(null);
            try {
                const data = await getProductsByCategory(categoryId);
                setProducts(data);
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchProducts();
    }, [categoryId]);

    if (loading) {
        return <p>Loading products...</p>;
    }

    if (error) {
        return <p className="text-red-500">{error}</p>;
    }

    if (!products || products.length === 0) {
        return <p className="text-center text-gray-500">No products available in this category</p>;
    }
    
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-center">Category Products</h1>
            <ProductGrid products={products} />
        </div>
    );
}

export default ProductsByCategoryPage;