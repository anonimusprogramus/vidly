import React from 'react'
import Joi from 'joi-browser'
import Form from './common/form'
import auth from '../services/authService'
import { Redirect } from 'react-router-dom'
import appStore from '../store'

class LoginForm extends Form {
  state = {
    data: { username: '', password: '' },
    errors: {}
  }

  schema = {
    username: Joi.string()
      .required()
      .label('Username'),

    password: Joi.string()
      .required()
      .label('Password')
  }

  doSubmit = async () => {
    try {
      const { data } = this.state
      await auth.login(data.username, data.password)

      const { state } = this.props.location
      const location = state ? state.from.pathname : '/'
      this.props.history.push(location)
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors }
        errors.username = ex.response.data
        this.setState({ errors })
      }
    }
  }

  render() {
    if (appStore.userIsLogged) return <Redirect to='/' />

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput('username', 'Username')}
          {this.renderInput('password', 'Password', 'password')}
          {this.renderButton('Login')}
        </form>
      </div>
    )
  }
}

export default LoginForm
