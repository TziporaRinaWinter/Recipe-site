import React, { useState, useEffect, useRef } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
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
          <h2>{recipe.title}</h2>
          <p>זמן הכנה: {recipe.preparationTime}</p>
          <button onClick={handleExpandClick} className="toggle-button">
            <KeyboardDoubleArrowDownIcon className="bounce" />
          </button>
        </div>

        <div id="full-recipe" className="full-recipe-section">
          <h3>מרכיבים:</h3>
          <ul>
            {recipe.ingredients.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <h3>הוראות הכנה:</h3>
          <p>{recipe.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeDisplay;
