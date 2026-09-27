import { BrowserRouter, Route, Routes } from 'react-router'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'
import ScrollToTop from './components/layout/ScrollToTop'

import About from './pages/about/About'
import CV from './pages/cv/CV'
import Experience from './pages/experience/Experience'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
