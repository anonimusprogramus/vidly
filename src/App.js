import React, { Component } from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'

import Movies from './vidly/components/movies'
import Customers from './vidly/components/customers'
import Rentals from './vidly/components/rentals'
import NotFound from './vidly/components/notFound'
import './App.css'
import NavBar from './vidly/components/navBar'
import MovieForm from './vidly/components/movieForm'

class App extends Component {
  render() {
    return (
      <main className='container'>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path='/movies/:id' component={MovieForm}></Route>
            <Route path='/movies' component={Movies}></Route>
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
