import './index.css'
import LogoutButton from '../LogoutButton'
import Header from '../Header'

const Home = () => (
  <div className="card">
    <Header />
    <h1 className="heading">Home Route</h1>
    <LogoutButton />
  </div>
)

export default Home
