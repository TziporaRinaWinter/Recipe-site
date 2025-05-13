import React, { useState } from "react";
import RecipeCardList from "./RecipeCardList";
// import allRecipes from "../data/recipes"; // כל המתכונים (לדוגמה)
// import { useParams } from "react-router-dom"; // אם יש קטגוריות ב-URL

function CategoryRecipesPage() {
  //   const { categoryName } = useParams(); //  /recipes/:categoryName
  const categoryID = "pastrys";

  //   const recipesInCategory = allRecipes.filter(
  //     (r) => r.category === categoryName
  //   );

  //   const filteredRecipes = recipesInCategory.filter((recipe) =>
  //     recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  //   );
  const recipe = {
    id: "1",
    image: "./src/assets/לחם הבית.jpg",
    title: "שם המתכון",
    preparationTime: "30 דקות",
    category: "מאפה",
    rank: "קל",
    remark:
      "ננחגמלגנכ כה כג המנהכחלגנ  ינדנ הגלנכמד  וידחכנג  נכגנכ גנלד ה דכלה חדעדנהנחנהחלגד החנלדכנדהד",
    instructions: "הוראות הכנה...",
  };

  return (
    <div>
      <RecipeCardList
        recipes={[recipe, recipe, recipe, recipe, recipe]}
        categoryID={categoryID}
      />
    </div>
  );
}

export default CategoryRecipesPage;
