import { BrowserRouter, Link, Route, Routes } from 'react-router'

function Home() {
  return <h1 className="text-4xl font-bold">Home</h1>
}

function About() {
  return <h1 className="text-4xl font-bold">About</h1>
}

function App() {
  return (
    <BrowserRouter>
      <nav className="flex gap-4 p-6">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>
    </BrowserRouter>
  )
}

export default App