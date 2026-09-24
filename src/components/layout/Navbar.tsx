import { Link } from 'react-router'

function Navbar() {
  return (
    <nav className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 p-6 text-sm md:gap-6 md:text-base">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/experience">Experience</Link>
      <Link to="/projects">Projects</Link>
      <Link to="/ui-lab">UI Lab</Link>
      <Link to="/cv">CV</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Navbar