import React from "react"
import { connect } from "react-redux"
import RecipeListItem from "./RecipeListItem"

const RecipeList = props => (
  <div>
    {props.recipes.map(recipe => (
      <RecipeListItem {...recipe} key={recipe.id} />
    ))}
  </div>
)

const mapStateToProps = ({ recipes }) => ({
  recipes
})

export default connect(mapStateToProps)(RecipeList)
