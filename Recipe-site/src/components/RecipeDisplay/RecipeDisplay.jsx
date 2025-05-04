import React, { useState, useEffect } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import "./RecipeDisplay.css";

const RecipeDisplay = ({ recipe }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const currentScrollPosition = window.scrollY;
    setScrollPosition(currentScrollPosition);

    // אם הגלילה למטה, נציג את המתכון המלא
    if (currentScrollPosition > 300) {
      setIsExpanded(true);
    } else {
      setIsExpanded(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="recipe-display">
      <div className="image-container">
        <img
          src={recipe.image}
          alt={recipe.title}
          className={`recipe-image ${isExpanded ? "expanded" : ""}`}
        />
      </div>
      <div className={`recipe-details ${isExpanded ? "hidden" : ""}`}>
        <h2>{recipe.title}</h2>
        <p>זמן הכנה: {recipe.preparationTime}</p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="toggle-button"
        >
          <KeyboardDoubleArrowDownIcon className="bounce" />
        </button>
      </div>
      {isExpanded && (
        <div className="full-recipe">
          <h3>מרכיבים:</h3>
          <div>
            {recipe.ingredients.map((ingredient, index) => (
              <div key={index}>{ingredient}</div>
            ))}
          </div>
          <h3>הוראות הכנה:</h3>
          <p>{recipe.instructions}</p>
        </div>
      )}
    </div>
  );
};

export default RecipeDisplay;
