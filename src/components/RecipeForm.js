import React from "react"
import IngredientList from "./IngredientList"

export default class RecipeForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      instructions: "",
      ingredients: [],
      ingredientMessage: ""
    }
  }

  onTitleChange = (e) => {
    const title = e.target.value
    this.setState(() => ({ title }))
  }

  onInstructionsChange = (e) => {
    const instructions = e.target.value
    this.setState(() => ({ instructions }))
  }

  ingredientListChange = (ingredients) => {
    const ingredientMessage = this.setIngredientMessage(ingredients)
    this.setState(() => ({
      ingredients: [...ingredients],
      ingredientMessage
    }))
  }

  setIngredientMessage = ingredients => {
    const ingredientCount = ingredients.length
    let hasIngredientCount = 0
    ingredients.forEach(ingredient => {
      if (ingredient.hasIngredient) {
        hasIngredientCount++
      }
    })
    if (ingredientCount === hasIngredientCount) {
      return "all"
    } else if (hasIngredientCount > 0) {
      return "some"
    } else if (hasIngredientCount === 0) {
      return "none" 
    }
  }

  onSubmit = e => {
    e.preventDefault()
    this.props.onSubmit({
      title: this.state.title,
      instructions: this.state.instructions,
      ingredients: this.state.ingredients,
      ingredientMessage: this.state.ingredientMessage
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input
          type="text"
          placeholder="Recipe title"
          value={this.state.title}
          onChange={this.onTitleChange}
        />
        <textarea
          placeholder="Recipe instructions"
          value={this.state.instructions}
          onChange={this.onInstructionsChange}
        />
        <IngredientList ingredientListChange={this.ingredientListChange} />
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
