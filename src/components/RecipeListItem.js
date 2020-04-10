import React from "react"

const RecipeListItem = ({ title, ingredientMessage }) => (
  <div>
    <h2>{title}</h2>
    <p>{ingredientMessage}</p>
  </div>
)

export default RecipeListItem
