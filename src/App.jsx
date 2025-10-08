import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrolltoTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Services from './pages/Services'
import FaqAccordion from './pages/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/FaqPage" element={<FaqAccordion/>} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
