import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Industries from './pages/Industries'
import Coverage from './pages/Coverage'
import CourierService from './pages/services/Courier'
import AirFreight from './pages/services/AirFreight'
import SeaFreight from './pages/services/SeaFreight'
import NGOLogistics from './pages/services/NGOLogistics'
import NotFound from './pages/NotFound'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/coverage" element={<Coverage />} />
        <Route path="/services/courier" element={<CourierService />} />
        <Route path="/services/air-freight" element={<AirFreight />} />
        <Route path="/services/sea-freight" element={<SeaFreight />} />
        <Route path="/services/ngo" element={<NGOLogistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App
