import { v1 as uuidv1 } from "uuid"

const addRecipe = ({
  title = "",
  instructions = "",
  ingredients = [],
  ingredientMessage
} = {}) => ({
  type: "ADD_RECIPE",
  recipe: {
    id: uuidv1(),
    title,
    instructions,
    ingredients,
    ingredientMessage
  }
})

const editRecipe = (id, updates) => ({
  type: "EDIT_RECIPE",
  id,
  updates
})

const removeRecipe = id => ({
  type: "REMOVE_RECIPE",
  id
})

export { addRecipe, editRecipe, removeRecipe }