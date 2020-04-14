import React from "react"
import IngredientList from "./IngredientList"

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      instructions: "",
      ingredients: [],
      ingedientMessage: ""
    }
  }
  render() {
    return (
      <form>
        <input type="text" placeholder="Recipe title" />
        <textarea placeholder="Recipe instructions" />
        <IngredientList />
        <button type="submit">Save Recipe</button>
      </form>
    )
  }
} 

// for edit page only
// <div>
//   <h2>Danger Zone</h2>
//   <button>Delete Recipe</button>
// </div>
