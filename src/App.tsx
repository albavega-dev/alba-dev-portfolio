import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Navbar from './components/layout/Navbar'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App