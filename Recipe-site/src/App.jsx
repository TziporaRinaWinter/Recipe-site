import { useState } from "react";
import "./App.css";
import RecipeDisplay from "./components/RecipeDisplay/RecipeDisplay.jsx";

function App() {
  const recipe = {
    image: "./src/assets/לחם הבית.jpg",
    title: "שם המתכון",
    preparationTime: "30 דקות",
    ingredients: ["מרכיב 1", "מרכיב 2", "מרכיב 3"],
    instructions: "הוראות הכנה...",
  };

  return (
    <>
      <RecipeDisplay recipe={recipe} />
    </>
  );
}

export default App;
