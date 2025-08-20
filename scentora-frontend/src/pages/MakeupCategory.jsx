import React, { useState, useEffect } from 'react';
import CategoryGrid from '../components/CategoryGrid.jsx';
import { getCategoryWithSubcategories } from '../services/api.js';

const MakeupCategory = () => {
    const [category, setCategory] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const makeupCategoryId = 8;
        getCategoryWithSubcategories(makeupCategoryId)
            .then(data => {
                setCategory(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Failed to fetch makeup category data:", error);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!category) {
        return <div>Makeup category not found.</div>;
    }

    return (
        <div className="makeup-category-page">
            <h1 className="text-3xl font-bold mb-4">{category.name}</h1>
            <CategoryGrid categories={category.subcategories} />
        </div>
    );
};

export default MakeupCategory;