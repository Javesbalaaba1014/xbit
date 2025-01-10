import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './hero'
import About from './components/About'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Investment from './components/Investment'
import Learn from './components/Learn'
import Footer from './components/Footer'
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-[#1E1B2E]">
          <Navbar />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <About />
              </>
            } />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/investment" element={<Investment />} />
            <Route path="/learn" element={<Learn />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  )
}

export default App
