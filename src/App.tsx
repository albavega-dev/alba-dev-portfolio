import { BrowserRouter, Route, Routes } from 'react-router'
import About from './pages/about/About'
import Home from './pages/home/Home'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Contact from './pages/contact/Contact'

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App