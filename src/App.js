import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import LandingPage from './pages/LandingPage/LandingPage';
import Contact from './pages/Contact/Contact';
import Projects from './pages/Projects/Projects';

function App() {
  return (
    <div className="App">
    <Router>
      {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
