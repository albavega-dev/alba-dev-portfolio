import { BrowserRouter, Route, Routes } from 'react-router'

import Footer from './components/layout/Footer'
import Navbar from './components/layout/Navbar'

import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import CV from './pages/cv/CV'
import Experience from './pages/experience/Experience'
import Home from './pages/home/Home'
import Projects from './pages/projects/Projects'
import UILab from './pages/ui-lab/UILab'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ui-lab" element={<UILab />} />
        <Route path="/cv" element={<CV />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App