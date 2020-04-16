import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./routers/AppRouter"
import { createStore, combineReducers } from "redux"
import { addRecipe } from "./actions/recipes"
import { Provider } from "react-redux"
import { v1 as uuidv1 } from "uuid"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const recipeReducerDefaultState = []



const recipeReducer = (state = recipeReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [...state, action.recipe]
    default:
      return state
  }
}

const store = createStore(combineReducers({ recipes: recipeReducer }))

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(
  addRecipe({
    title: "recipe 1",
    instructions: "do some stuff",
    ingredients: ["one", "two", "three"],
    ingredientMessage: "none"
  })
)

store.dispatch(
  addRecipe({
    title: "recipe 2",
    instructions: "instructions instructions",
    ingredients: ["spicy", "spice", "vegetable"],
    ingredientMessage: "some"
  })
)

store.dispatch(
  addRecipe({
    title: "recipe 3",
    instructions: "tesssssssssssssst",
    ingredients: ["test", "asdf", "fdsa"],
    ingredientMessage: "all"
  })
)

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"))
