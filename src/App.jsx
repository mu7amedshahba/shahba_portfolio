// src/App.jsx
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/UI/Pages/Hero';
// import Navbar from './component/UI/navbar/Navbar';
import Navbar from './component/UI/Pages22/Navbar';
import WebSite from './component/UI/website';


function App() {
  useEffect(() => {
    // Ensure dark mode is set on initial load
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'light') {
      root.classList.remove('dark');
    } else {
      // Default to dark mode
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    }
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<WebSite />} />
          {/* Add other routes as needed
          <Route path="/projects" element={<Home />} />
          <Route path="/contact" element={<Home />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;