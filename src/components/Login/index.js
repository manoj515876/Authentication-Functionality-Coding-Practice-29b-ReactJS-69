import {Component} from 'react'

import {withRouter} from 'react-router-dom'

import Cookies from 'js-cookie'

import './index.css'

class Login extends Component {
  onSuccess = jwtToken => {
    const {history} = this.props
    history.replace('/')
    Cookies.set('jwt_token', jwtToken, {expires: 30})
  }

  onLogin = async () => {
    const userDetails = {
      username: 'rahul',
      password: 'rahul@2021',
    }
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSuccess(data.jwt_token)
    }
  }

  render() {
    return (
      <div className="card">
        <h1 className="heading">Please Login</h1>
        <button type="button" onClick={this.onLogin}>
          Login with Sample Creds
        </button>
      </div>
    )
  }
}

export default withRouter(Login)
