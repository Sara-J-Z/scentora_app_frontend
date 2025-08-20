import React, { useState, useEffect } from 'react';
import CategoryGrid from '../components/CategoryGrid.jsx';
import { getCategoryWithSubcategories } from '../services/api.js';

const PerfumeCategory = () => {
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const perfumeCategoryId = 4;
        getCategoryWithSubcategories(perfumeCategoryId)
            .then(data => {
                
                setCategory(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch perfume category data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!category) {
        return <div>Perfume category not found.</div>;
    }

    return (
        <div className="perfume-category-page">
            <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
            <CategoryGrid categories={category.subcategories} />
        </div>
    );
};

export default PerfumeCategory;