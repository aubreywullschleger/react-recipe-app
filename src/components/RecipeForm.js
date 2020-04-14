import React from "react"
import IngredientList from "./IngredientList"

const RecipeForm = () => (
  <form>
    <input type="text" placeholder="Recipe title" />
    <textarea placeholder="Recipe instructions" />
    <IngredientList />
    <button type="submit">Save Recipe</button>
  </form>
)

export default RecipeForm

// for edit page only
// <div>
//   <h2>Danger Zone</h2>
//   <button>Delete Recipe</button>
// </div>
