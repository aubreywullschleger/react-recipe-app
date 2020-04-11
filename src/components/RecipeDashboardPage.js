import React from "react"
import RecipeListFilters from "./RecipeListFilters"
import RecipeListItem from "./RecipeListItem"

const RecipeDashboard = () => (
  <div>
    <RecipeListFilters />
    <RecipeListItem title="Recipe 1" ingredientMessage="You have all the ingredients" />
    <RecipeListItem title="Recipe 2" ingredientMessage="You have some of the ingredients" />
    <RecipeListItem title="Recipe 3" ingredientMessage="You have none of the ingredients" />
  </div>
)

export default RecipeDashboard