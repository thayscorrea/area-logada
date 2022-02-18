import { Switch } from "react-router-dom"

import { Route } from "./Route"

import { Dashboard } from "../pages/Dashboard"
import { Login } from '../pages/Login'
import { SendDocuments } from '../pages/SendDocuments'
import { ListDocuments } from '../pages/ListDocuments'

export function Routes(){
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route exact path="/" component={Dashboard} isPrivate />
      <Route exact path="/enviar-documentos" component={SendDocuments} isPrivate />
      <Route exact path="/listar-documentos" component={ListDocuments} isPrivate/>
    </Switch>
  )
}
