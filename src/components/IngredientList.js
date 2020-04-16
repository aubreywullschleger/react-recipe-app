import React from "react"
import IngredientListItem from "./IngredientListItem"
import { v1 as uuidv1 } from "uuid"

class Ingredient {
  constructor(id, name, hasIngredient) {
    this.id = id
    this.name = name
    this.hasIngredient = hasIngredient
  }
}

class IngredientList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredient: new Ingredient(uuidv1(), "", false),
      localIngredientList: [],
    }
    this.handleUpdateIngredientName = this.handleUpdateIngredientName.bind(this)
    this.handleAddIngredientItem = this.handleAddIngredientItem.bind(this)
    this.handleRemove = this.handleRemove.bind(this)
    this.handleIngredientToggle = this.handleIngredientToggle.bind(this)
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
    this.setState(
      (prevState) => ({
        localIngredientList: [
          ...prevState.localIngredientList,
          prevState.ingredient,
        ],
        ingredient: new Ingredient(uuidv1(), "", false),
      }),
      () => {
        this.props.ingredientListChange(this.state.localIngredientList)
      }
    )
  }

  handleRemove(id) {
    const currentIngredientList = [...this.state.localIngredientList]
    const updatedIngredientList = currentIngredientList.filter(
      (ingredient) => ingredient.id !== id
    )
    this.setState(
      () => ({ localIngredientList: updatedIngredientList }),
      () => {
        this.props.ingredientListChange(this.state.localIngredientList)
      }
    )
  }

  handleIngredientToggle(id) {
    const currentIngredientList = JSON.parse(
      JSON.stringify(this.state.localIngredientList)
    )
    const foundIngredientIndex = currentIngredientList.findIndex(
      (ingredient) => ingredient.id === id
    )
    currentIngredientList[
      foundIngredientIndex
    ].hasIngredient = !currentIngredientList[foundIngredientIndex].hasIngredient
    this.setState(
      () => ({ localIngredientList: currentIngredientList }),
      () => {
        this.props.ingredientListChange(this.state.localIngredientList)
      }
    )
  }

  render() {
    return (
      <div>
        <h2>Ingredients</h2>
        <div>
          {this.state.localIngredientList.map((ingredient) => (
            <IngredientListItem
              ingredient={ingredient}
              key={ingredient.id}
              onClick={this.handleRemove}
              handleIngredientToggle={this.handleIngredientToggle}
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
