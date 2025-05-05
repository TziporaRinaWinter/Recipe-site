import React, { useState, useEffect, useRef } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import { Stack, Typography } from "@mui/material";

import "./RecipeDisplay.css";

const RecipeDisplay = ({ recipe }) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const contentEl = contentRef.current;

    const handleScroll = () => {
      if (contentEl.scrollTop > 100) {
        setIsZoomed(true);
      } else {
        setIsZoomed(false);
      }
    };

    if (contentEl) {
      contentEl.addEventListener("scroll", handleScroll);
    }

    return () => {
      if (contentEl) {
        contentEl.removeEventListener("scroll", handleScroll);
      }
    };
  }, []);

  const handleExpandClick = () => {
    const element = document.getElementById("full-recipe");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="recipe-display">
      <div className="image-container">
        <img
          src={recipe.image}
          alt={recipe.title}
          className={`recipe-image ${isZoomed ? "zoomed" : ""}`}
        />
      </div>

      <div className="recipe-content" ref={contentRef}>
        <div className="recipe-details">
          <h1>{recipe.title}</h1>
          <br />
          <Stack direction="row" spacing={3} alignItems="center">
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">{recipe.category}</Typography>
              <RestaurantIcon />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">{recipe.rank}</Typography>
              <EmojiEventsIcon />
            </Stack>
            <Stack direction="row" spacing={1} alignItems="center">
              <Typography variant="body1">{recipe.preparationTime}</Typography>
              <AccessTimeIcon />
            </Stack>
          </Stack>
          <br />
          <h2>{recipe.remark}</h2>

          <button onClick={handleExpandClick} className="toggle-button">
            <KeyboardDoubleArrowDownIcon className="bounce" />
          </button>
        </div>

        <div id="full-recipe" className="full-recipe-section">
          <h3>הוראות הכנה:</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
