import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

import appStore from './vidly/store'

import Movies from './vidly/components/movies'
import Customers from './vidly/components/customers'
import Rentals from './vidly/components/rentals'
import NotFound from './vidly/components/notFound'
import NavBar from './vidly/components/navBar'
import MovieForm from './vidly/components/movieForm'
import LoginForm from './vidly/components/loginForm'
import RegisterForm from './vidly/components/registerForm'
import Logout from './vidly/components/logout'
import auth from './vidly/services/authService'

import 'react-toastify/dist/ReactToastify.css'
import './App.css'
import ProtectedRoute from './vidly/components/protectedRoute'

class App extends Component {
  state = {}

  componentDidMount() {
    appStore.user = auth.getCurrentUser()
    appStore.userIsLogged = appStore.user !== null
  }

  render() {
    return (
      <main className='container'>
        <React.Fragment>
          <ToastContainer />
          <NavBar />
          <Switch>
            <Route path='/register' component={RegisterForm}></Route>
            <Route path='/login' component={LoginForm}></Route>
            <Route path='/logout' component={Logout}></Route>
            <ProtectedRoute
              path='/movies/:id'
              component={MovieForm}
            ></ProtectedRoute>
            <Route
              path='/movies'
              render={props => <Movies {...props} />}
            ></Route>
            <Route path='/customers' component={Customers}></Route>
            <Route path='/rentals' component={Rentals}></Route>
            <Route path='/not-found' component={NotFound}></Route>
            <Redirect from='/' exact to='/movies' />
            <Redirect to='/not-found' />
          </Switch>
        </React.Fragment>
      </main>
    )
  }
}

export default App
