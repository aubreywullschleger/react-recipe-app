import React from "react"
import { connect } from "react-redux"
import RecipeForm from "./RecipeForm"
import { editRecipe } from "../actions/recipes"

const EditRecipePage = (props) => (
  <RecipeForm
    recipe={props.recipe}
    onSubmit={(recipe) => {
      props.dispatch(editRecipe(props.recipe.id, recipe))
      props.history.push("/")
    }}
  />
)

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id),
  }
}

export default connect(mapStateToProps)(EditRecipePage)
