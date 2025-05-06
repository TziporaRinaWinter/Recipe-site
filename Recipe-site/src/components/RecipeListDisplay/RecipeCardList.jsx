import React, { useState } from "react";
import { Box } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RecipeCardListContent from "./RecipeCardListContent";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";
import "./RecipeCardList.css";

function RecipeCardList({ recipes }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <Box className="card-list-wrapper">
      {selectedRecipe && (
        <div className="back-button" onClick={handleBack}>
          <ArrowBackIcon />
        </div>
      )}

      {selectedRecipe ? (
        <RecipeDisplay recipe={selectedRecipe} />
      ) : (
        <RecipeCardListContent recipes={recipes} onSelect={handleSelect} />
      )}
    </Box>
  );
}

export default RecipeCardList;
