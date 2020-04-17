import React from "react"
import { connect } from "react-redux"
import RecipeForm from "./RecipeForm"

const EditRecipePage = (props) => {
  console.log(props)
  return (
  <RecipeForm recipe={props.recipe} />
)}

const mapStateToProps = (state, props) => {
  return {
    recipe: state.recipes.find((recipe) => recipe.id === props.match.params.id),
  }
}

export default connect(mapStateToProps)(EditRecipePage)
