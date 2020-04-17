import React from "react"

const IngredientListItem = (props) => {
  console.log(props.ingredient)
  return (
  <div>
    <input
      type="checkbox"
      // value={props.ingredient.hasIngredient}
      onChange={() => props.handleIngredientToggle(props.ingredient.id)}
      checked={props.ingredient.hasIngredient}
    />
    <span>{props.ingredient.name}</span>
    <button type="button" onClick={() => props.onClick(props.ingredient.id)}>
      Remove
    </button>
  </div>
)}

export default IngredientListItem
