import { useState } from "react";
import "./App.css";
import RecipeCardList from "./components/RecipeListDisplay/RecipeCardList.jsx";
import Recipe from "./models/Recipe.js";
import Footer from "./components/Footer/Footer.jsx";
import Header from "./components/Header/header.jsx";

function App() {
  const recipe = new Recipe({
    id: "1",
    image: "./src/assets/לחם הבית.jpg",
    title: "שם המתכון",
    preparationTime: "30 דקות",
    category: "מאפה",
    rank: "קל",
    remark:
      "ננחגמלגנכ כה כג המנהכחלגנ  ינדנ הגלנכמד  וידחכנג  נכגנכ גנלד ה דכלה חדעדנהנחנהחלגד החנלדכנדהד",
    instructions: "הוראות הכנה...",
  });

  return (
    <>
      <Header />
      <RecipeCardList recipes={[recipe, recipe, recipe, recipe]} />
      <Footer/>
    </>
  );
}

export default App;
