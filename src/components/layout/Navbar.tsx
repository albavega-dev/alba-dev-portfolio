import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="flex gap-6 p-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </nav>
  )
}

export default Navbar