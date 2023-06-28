import {Component} from 'react'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

class LogoutButton extends Component {
  onLogout = () => {
    const {history} = this.props
    history.replace('/login')
    Cookies.remove('jwt_token')
  }

  render() {
    return (
      <div className="card">
        <button type="button" onClick={this.onLogout}>
          Logout
        </button>
      </div>
    )
  }
}

export default withRouter(LogoutButton)
