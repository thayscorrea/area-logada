import { Switch } from "react-router-dom"

import { Route } from "./Route"

import { Dashboard } from "../pages/Dashboard"
import { Admin } from "../pages/Admin"
import { Login } from '../pages/Login'

export function Routes(){
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      <Route exact path="/dashboard" component={Dashboard} isPrivate />
      <Route path="/admin" component={Admin} isPrivate />
    </Switch>
  )
}
