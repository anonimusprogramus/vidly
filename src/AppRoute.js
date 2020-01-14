import React from 'react'
import NavBar from './route-app/navbar'
import { Route, Switch, Redirect } from 'react-router-dom'
import Products from './route-app/products'
import Posts from './route-app/posts'
import Dashboard from './route-app/admin/dashboard'
import Home from './route-app/home'
import ProductDetails from './route-app/productDetails'
import NotFound from './route-app/notFound'

const AppRoute = () => {
  return (
    <div>
      <NavBar />
      <div className='content'>
        <Switch>
          <Route path='/products/:id' component={ProductDetails} />
          <Route
            path='/products'
            render={props => <Products sortBy='newest' {...props} />}
          />
          <Route path='/' exact component={Home} />
          <Route path='/posts/:year?/:month?' component={Posts} />
          <Route path='/admin' component={Dashboard} />
          <Route path='/not-found' component={NotFound} />
          <Redirect from='/messages' to='/posts' />
          <Redirect to='/not-found' />
        </Switch>
      </div>
    </div>
  )
}

export default AppRoute
