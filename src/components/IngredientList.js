import React from "react"
import IngredientListItem from "./IngredientListItem"
import { v1 as uuidv1 } from "uuid"

class IngredientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: {
        id: uuidv1(),
        name: "",
        hasIngredient: false,
      },
      localIngredientList: [],
    }
    this.handleUpdateIngredientName = this.handleUpdateIngredientName.bind(this)
    this.handleAddIngredientItem = this.handleAddIngredientItem.bind(this)
  }

  handleUpdateIngredientName(e) {
    const ingredientName = e.target.value
    this.setState((prevState) => ({
      ingredient: {
        name: ingredientName,
        id: prevState.ingredient.id,
        hasIngredient: prevState.ingredient.hasIngredient,
      },
    }))
  }

  handleAddIngredientItem() {
    this.setState((prevState) => ({
      localIngredientList: [
        ...prevState.localIngredientList,
        prevState.ingredient,
      ],
      ingredient: {
        id: uuidv1(),
        name: "",
        hasIngredient: false,
      },
    }))
  }

  render() {
    console.log(this.state)
    return (
      <div>
        <h2>Ingredients</h2>
        <div>
          {this.state.localIngredientList.map((ingredient) => (
            <IngredientListItem
              ingredient={ingredient.name}
              key={ingredient.id}
            />
          ))}
        </div>
        <input
          type="text"
          placeholder="ingredient"
          value={this.state.ingredient.name}
          onChange={this.handleUpdateIngredientName}
        />
        <button type="button" onClick={this.handleAddIngredientItem}>
          Add Ingredient
        </button>
      </div>
    )
  }
}

export default IngredientList
