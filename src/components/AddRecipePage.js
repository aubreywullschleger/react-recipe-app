import React from "react"
import RecipeForm from "./RecipeForm"
import { addRecipe } from "../actions/recipes"
import { connect } from "react-redux"

const AddRecipePage = props => (
  <div>
    <RecipeForm onSubmit={recipe => {
      props.dispatch(addRecipe(recipe))
      props.history.push("/")
    }}
  />
  </div>
)

export default connect()(AddRecipePage)