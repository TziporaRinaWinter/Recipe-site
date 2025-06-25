import React, { useEffect, useState } from "react";
import { getAllCategoryNames, getSubcategoryNames } from "./utils/categoryUtils"; // ייבוא הפונקציות
import CategoryList from "./CategoryList"; // רכיב להציג את הקטגוריות

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState(null);
  const [subcategories, setSubcategories] = useState([]);

  useEffect(() => {
    const allCategories = getAllCategoryNames("he"); // קבלת כל הקטגוריות בשפה העברית
    setCategories(allCategories);
  }, []);

  useEffect(() => {
    if (selectedCategoryId) {
      const subs = getSubcategoryNames(selectedCategoryId, "he"); // קבלת תתי קטגוריות לפי הקטגוריה הנבחרת
      setSubcategories(subs);
    }
  }, [selectedCategoryId]);

  const handleCategorySelect = (id) => {
    setSelectedCategoryId(id);
  };

  return (
    <div>
      <h1>קטגוריות</h1>
      <CategoryList 
        categories={categories} 
        onCategorySelect={handleCategorySelect} 
      />
      {selectedCategoryId && (
        <div>
          <h2>תתי קטגוריות</h2>
          <ul>
            {subcategories.map((sub) => (
              <li key={sub.id}>{sub.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;
