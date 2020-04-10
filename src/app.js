import React from "react"
import ReactDOM from "react-dom"
import Header from "./components/Header"
import RecipeListFilters from "./components/RecipeListFilters"
import RecipeListItem from "./components/RecipeListItem"
import "normalize.css/normalize.css"
import "./styles/styles.scss"

const RecipeApp = () => (
  <div>
    <Header />
    <RecipeListFilters />
    <RecipeListItem title="Recipe 1" ingredientMessage="You have all the ingredients" />
    <RecipeListItem title="Recipe 2" ingredientMessage="You have some of the ingredients" />
    <RecipeListItem title="Recipe 3" ingredientMessage="You have none of the ingredients" />
  </div>
)

ReactDOM.render(<RecipeApp />, document.getElementById("app"))