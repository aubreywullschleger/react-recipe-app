import React from "react"

const IngredientListItem = (props) => (
  <div>
    <input
      type="checkbox"
      value={props.ingredient.hasIngredient}
      onChange={() => props.handleIngredientToggle(props.ingredient.id)}
    />
    <span>{props.ingredient.name}</span>
    <button type="button" onClick={() => props.onClick(props.ingredient.id)}>
      Remove
    </button>
  </div>
)

export default IngredientListItem
