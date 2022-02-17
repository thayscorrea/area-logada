import { Route as ReactDOMRoute, Redirect } from "react-router-dom";

import { useAuth } from "../hooks/useAuth";

export function Route({
  isPrivate = false,
  component: Component,
  ...rest
}){
  const { user } = useAuth();

  console.log(user)

  return (
    <ReactDOMRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? "/" : "/admin",
              state: { form: location },
            }}
          />
        )
      }}
    />
  )
}
