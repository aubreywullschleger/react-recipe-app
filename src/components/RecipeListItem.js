import React from "react"
import { Link } from "react-router-dom"

const RecipeListItem = ({ title, ingredientMessage, id }) => (
  <div>
    <Link to={`/edit/${id}`}><h2>{title}</h2></ Link>
    <p>You have {ingredientMessage} of the ingredients.</p>
  </div>
)

export default RecipeListItem
