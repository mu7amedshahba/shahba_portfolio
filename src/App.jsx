// src/App.jsx
import { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import ErrorBoundary from "./component/error/ErrorBoundery";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const LazyWebSite = lazy(() => import("./component/UI/website"));
const LazyNavbar = lazy(() => import("./component/UI/navbar/Navbar"));
const LazyAbout = lazy(() => import("./component/UI/Pages/About"));
const LazyProjects = lazy(() => import("./component/UI/Pages/Projects"));
const LazyServices = lazy(() => import("./component/UI/Pages/Services"));
const LazyLoading = lazy(() => import("./component/spinner/Spinner"));
const LazyNotFound = lazy(() => import("./component/notFound/NotFound"));
const LazyFooter = lazy(() => import("./component/UI/Pages/Footer"));
const LazyHero = lazy(() => import("./component/UI/Pages/Hero"));
const LazySingleProjects = lazy(() =>
  import("./component/UI/Pages/SingleProduct")
);
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant" // or "smooth" for smooth scrolling
    });
  }, [pathname]);
};

const AppContent = () => {
  useScrollToTop(); // Use the scroll hook
  
  return (
    <div className="App">
      <LazyNavbar />
      <Routes>
        <Route path="/" element={<LazyWebSite />} />
        <Route path="/home" element={<LazyHero />} />
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/projects" element={<LazyProjects />} />
        <Route path="/projects/:id" element={<LazySingleProjects />} />
        <Route path="/services" element={<LazyServices />} />
        <Route path="*" element={<LazyNotFound />} />
      </Routes>
      <LazyFooter />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ErrorBoundary>
        <Suspense fallback={<LazyLoading />}>
          <AppContent />
        </Suspense>
      </ErrorBoundary>
    </Router>
  );
}

export default App;