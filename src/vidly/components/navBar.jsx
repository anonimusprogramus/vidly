import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import { view } from 'react-easy-state'
import appStore from '../store'

const NavBar = view(() => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <Link className='navbar-brand' to='/'>
        Vidly
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <div className='navbar-nav'>
          <NavLink className='nav-item nav-link' to='/movies'>
            Movies
          </NavLink>
          <NavLink className='nav-item nav-link' to='/customers'>
            Customers
          </NavLink>
          <NavLink className='nav-item nav-link' to='/rentals'>
            Rentals
          </NavLink>
          {!appStore.userIsLogged && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/login'>
                Login
              </NavLink>
              <NavLink className='nav-item nav-link' to='/register'>
                Register
              </NavLink>
            </React.Fragment>
          )}
          {appStore.userIsLogged && (
            <React.Fragment>
              <NavLink className='nav-item nav-link' to='/profile'>
                {appStore.user.name}
              </NavLink>
              <NavLink className='nav-item nav-link' to='/logout'>
                Logout
              </NavLink>
            </React.Fragment>
          )}
        </div>
      </div>
    </nav>
  )
})

export default NavBar
