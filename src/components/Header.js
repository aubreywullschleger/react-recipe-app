import React from "react"
import { NavLink } from "react-router-dom"

const Header = () => (
  <div>
    <h1>Recipe App</h1>
    <NavLink activeClassName="is-active" exact={true} to="/">Dashboard</NavLink>
    <NavLink activeClassName="is-active" to="/create">Add Recipe</NavLink>
    <NavLink activeClassName="is-active" to="/about">About</NavLink>
  </div>
)

export default Header