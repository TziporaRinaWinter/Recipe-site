import React from "react";
import { Container, Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";

function RecipeCardListContent({ recipes, onSelect }) {
  return (
    <Container
      maxWidth="lg"
      sx={{
        paddingY: 6,
      }}
    >
      <Grid container spacing={3} justifyContent="center">
        {recipes.map((recipe) => (
          <Grid item xs={12} sm={6} md={4} key={recipe.id}>
            <RecipeCard recipe={recipe} onClick={() => onSelect(recipe)} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default RecipeCardListContent;
