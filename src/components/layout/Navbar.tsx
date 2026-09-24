import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="flex gap-6 p-6">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/ui-lab">UI Lab</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar