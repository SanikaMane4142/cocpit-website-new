import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Features } from './pages/Features';
import { Careers } from './pages/Careers';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-indigo-100 selection:text-indigo-900 bg-radial-gradient">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/careers" element={<Careers />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
