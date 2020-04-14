import React from "react"

const RecipeForm = () => (
  <form>
    <input type="text" placeholder="Recipe title" />
    <textarea placeholder="Recipe instructions" />
    <div>
      <h2>Ingredients</h2>
      <input type="text" placeholder="ingredient" />
      <button>Add Ingredient</button>
    </div>
    <button>Save Recipe</button>
    <div>
      <h2>Danger Zone</h2>
      <button>Delete Recipe</button>
    </div>
  </form>
)

export default RecipeForm