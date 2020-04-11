import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import Header from "../components/Header"
import RecipeDashboardPage from "../components/RecipeDashboardPage"
import AddRecipePage from "../components/AddRecipePage"
import EditRecipePage from "../components/EditRecipePage"
import AboutPage from "../components/AboutPage"
import NotFoundPage from "../components/NotFoundPage"

const AppRouter = () => (
  <BrowserRouter>
    <Header />
    <Switch>
      <Route path="/" component={RecipeDashboardPage} exact={true} />
      <Route path="/create" component={AddRecipePage} />
      <Route path="/edit/:id" component={EditRecipePage} />
      <Route path="/about" component={AboutPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </BrowserRouter>
)

export default AppRouter