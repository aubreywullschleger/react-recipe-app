import React from "react"
import { connect } from "react-redux"
import RecipeForm from "./RecipeForm"
import { editRecipe, removeRecipe } from "../actions/recipes"

const EditRecipePage = (props) => (
  <div>
    <RecipeForm
      recipe={props.recipe}
      onSubmit={(recipe) => {
        props.dispatch(editRecipe(props.recipe.id, recipe))
        props.history.push("/")
      }}
    />
    <div>
      <h2>Danger Zone</h2>
      <button onClick={() => {
        props.dispatch(removeRecipe(props.recipe.id))
        props.history.push("/")
      }}>Delete Recipe</button>
    </div>
  </div>
)

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id),
  }
}

export default connect(mapStateToProps)(EditRecipePage)
