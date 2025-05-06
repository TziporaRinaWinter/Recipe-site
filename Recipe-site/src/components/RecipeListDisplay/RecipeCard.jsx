import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import "./RecipeCard.css";

function RecipeCard({ recipe, onClick }) {
  return (
    <Card className="recipe-card">
      <CardActionArea onClick={onClick} className="recipe-card-action">
        <CardMedia
          component="img"
          image={recipe.image}
          alt={recipe.title}
          className="recipe-card-image"
        />
        <Box className="recipe-card-title-overlay">
          <Typography variant="subtitle1" fontWeight="bold">
            {recipe.title}
          </Typography>
        </Box>
      </CardActionArea>
    </Card>
  );
}

export default RecipeCard;
