import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RecipeCardListContent from "./RecipeCardListContent";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";
import "./RecipeCardList.css";

function RecipeCardList({ recipes, category, imageSrc }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };

  return (
    <Box className="card-list-wrapper">
      {selectedRecipe ? (
        <>
          <div className="back-button" onClick={handleBack}>
            <ArrowBackIcon />
          </div>
          <RecipeDisplay recipe={selectedRecipe} />
        </>
      ) : (
        <>
          <div
            className="recipe-background"
            style={{ backgroundImage: `url("${imageSrc}")` }}
          >
            <div className="recipe-header-overlay">
              <Typography variant="h3" className="recipe-header-title">
                {category}
              </Typography>
            </div>
          </div>
          <div className="content-wrapper">
            <RecipeCardListContent recipes={recipes} onSelect={handleSelect} />
          </div>
        </>
      )}
    </Box>
  );
}

export default RecipeCardList;
