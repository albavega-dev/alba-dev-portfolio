import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Contact from './pages/contact/Contact'
import Projects from './pages/projects/Projects'
import UILab from './pages/ui-lab/UILab'
import Experience from './pages/experience/Experience'
import CV from './pages/cv/CV'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/ui-lab" element={<UILab />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/cv" element={<CV />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App