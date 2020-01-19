import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import appStore from '../store'

const ProtectedRoute = ({ component: Component, render, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (!appStore.userIsLogged)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          )
        return Component ? <Component {...props} /> : render(props)
      }}
    ></Route>
  )
}

export default ProtectedRoute
