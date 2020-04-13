import React from "react"
import { connect } from "react-redux"
import RecipeListFilters from "./RecipeListFilters"
import RecipeList from "./RecipeList"

const RecipeDashboard = props => (
  <div>
    <RecipeListFilters />
    <RecipeList />
  </div>
)



export default RecipeDashboard