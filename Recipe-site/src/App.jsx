import { useState } from "react";
import "./App.css";
import RecipeDisplay from "./components/RecipeDisplay/RecipeDisplay.jsx";

function App() {
  const recipe = {
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
    <>
      <RecipeDisplay recipe={recipe} />
    </>
  );
}

export default App;
