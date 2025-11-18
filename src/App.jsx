// src/App.jsx
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ErrorBoundary from "./component/error/ErrorBoundery";
const LazyWebSite = lazy(() => import("./component/UI/website"));
const LazyNavbar = lazy(() => import("./component/UI/navbar/Navbar"));
const LazyAbout = lazy(() => import("./component/UI/Pages/About"));
const LazyProjects = lazy(() => import("./component/UI/Pages/Projects"));
const LazyServices = lazy(() => import("./component/UI/Pages/Services"));
const LazyLoading = lazy(() => import("./component/spinner/Spinner"));
const LazyNotFound = lazy(() => import("./component/notFound/NotFound"));
const LazyFooter = lazy(() => import("./component/UI/Pages/Footer"));

function App() {
  useEffect(() => {
    const root = document.documentElement;
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      root.classList.remove("dark");
    } else {
      // Default to dark mode
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  }, []);

  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LazyLoading />}>
          <div className="App">
            <LazyNavbar />
            <Routes>
              <Route path="/" element={<LazyWebSite />} />
              <Route path="/about" element={<LazyAbout />} />
              <Route path="/projects" element={<LazyProjects />} />
              <Route path="/services" element={<LazyServices />} />
              <Route path="*" element={<LazyNotFound />} />
              
            </Routes>
          </div>
          <LazyFooter />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;
