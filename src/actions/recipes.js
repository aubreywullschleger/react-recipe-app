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

export { addRecipe }