import { BrowserRouter, Link, Route, Routes } from 'react-router'
import About from './pages/about/About'
import Home from './pages/home/Home'

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App