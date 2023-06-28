import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="nav-container">
    <li>
      <Link className="link-card" to="/">
        Home
      </Link>
    </li>
    <li>
      <Link className="link-card" to="/about">
        About
      </Link>
    </li>
  </ul>
)

export default Header
