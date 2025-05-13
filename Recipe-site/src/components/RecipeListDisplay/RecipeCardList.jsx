import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import RecipeCardListContent from "./RecipeCardListContent";
import RecipeDisplay from "../RecipeDisplay/RecipeDisplay";
import { getCategoryById } from "../../utils/categoryUtils";
import "./RecipeCardList.css";

function RecipeCardList({ recipes, categoryID }) {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSelect = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const handleBack = () => {
    setSelectedRecipe(null);
  };
  const category = getCategoryById(categoryID);
  const imageSrc = getCategoryById(categoryID).imageSrc;
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
              <div className="recipe-header-text">
                <div variant="h3" className="recipe-header-title">
                  {category.names["he"]}
                </div>
                <div variant="h2" className="recipe-header-subtitle">
                  {category.names["en"]}
                </div>
              </div>
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
