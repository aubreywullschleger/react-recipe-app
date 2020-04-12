import React from "react"
import ReactDOM from "react-dom"
import AppRouter from "./routers/AppRouter"
import { createStore } from "redux"
import { Provider } from "react-redux"
import { v1 as uuidv1 } from "uuid"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const recipeReducerDefaultState = []

const addRecipe = (
  {
    title = "",
    instructions = "",
    ingredients = []
  } = {}
) => ({
  type: "ADD_RECIPE",
  recipe: {
    id: uuidv1(),
    title,
    instructions,
    ingredients
  }
})

const recipeReducer = (state = recipeReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_RECIPE":
      return [
        ...state,
        action.recipe
      ]
    default:
      return state  
  }
}

const store = createStore(recipeReducer)

store.subscribe(() => {
  console.log(store.getState())
})

store.dispatch(addRecipe({title: "recipe 1", instructions: "do some stuff", ingredients: ["one", "two", "three"]}))


const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById("app"))