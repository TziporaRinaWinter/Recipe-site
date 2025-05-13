// utils/categoryUtils.js
import categories from "../data/categories";

/**
 * Get full category object by ID
 */
export function getCategoryById(id) {
  return categories.find((cat) => cat.id === id);
}

/**
 * Get subcategory object by ID
 */
export function getSubcategoryById(subId) {
  for (const cat of categories) {
    const sub = cat.subcategories.find((s) => s.id === subId);
    if (sub) return sub;
  }
  return null;
}

/**
 * Get category or subcategory name in a specific language
 */
export function getCategoryNameById(id, lang = "he") {
  const category = getCategoryById(id);
  if (category) return category.names[lang];

  const sub = getSubcategoryById(id);
  if (sub) return sub.names[lang];

  return "";
}

/**
 * Get all categories in a given language (for dropdowns etc)
 */
export function getAllCategoryNames(lang = "he") {
  return categories.map((cat) => ({
    id: cat.id,
    name: cat.names[lang],
  }));
}

/**
 * Get all subcategories of a category in a specific language
 */
export function getSubcategoryNames(categoryId, lang = "he") {
  const category = getCategoryById(categoryId);
  if (!category) return [];

  return category.subcategories.map((sub) => ({
    id: sub.id,
    name: sub.names[lang],
  }));
}

/**
 * Get all categories with subcategory in a specific language
 */
export function getCategoriesWithSubcategories(lang = "he") {
  return categories
    .filter(
      (cat) => Array.isArray(cat.subcategories) && cat.subcategories.length > 0
    )
    .map((cat) => ({
      id: cat.id,
      name: cat.names[lang],
      subcategories: cat.subcategories.map((sub) => ({
        id: sub.id,
        name: sub.names[lang],
      })),
    }));
}
