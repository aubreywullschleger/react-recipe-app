const recipeReducerDefaultState = []

const recipesReducer = (state = recipeReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.recipe]
    case "EDIT_RECIPE":
      return state.map(recipe => {
        if (recipe.id === action.id) {
          return {
            ...recipe,
            ...action.updates
          }
        } else {
          return recipe
        }
      })
    default:
      return state
  }
}

export default recipesReducer