import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import ScrollToTop from './components/ScrollToTop'
import Header from './components/Header'
import LandingPage from './pages/LandingPage'
import About from './pages/About'
import Services from './pages/Services'
import FaqAccordion from './pages/FAQ'
import TermsCondition from './pages/TermsCondition'
import PrivaryPolicy from './pages/PrivacyPolicy'
import Footer from './components/Footer'

function App() {
  return (
    <Router>
      <HelmetProvider>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/FaqPage" element={<FaqAccordion/>} />
        <Route path="/terms" element={<TermsCondition />} />
        <Route path="/privacy" element={<PrivaryPolicy />} />
      </Routes>
      <Footer />
      </HelmetProvider>
    </Router>
  )
}

export default App
