import { Route as ReactDOMRoute, Redirect } from "react-router-dom"

import { useAuth } from "../hooks/useAuth"

export function Route({
  component: Component,
  isPrivate = false,
  ...rest
}){
  const { user } = useAuth()

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/login" : "/",
              state: { form: location }
            }}
          />
        )
      }}
    />
  )
}
