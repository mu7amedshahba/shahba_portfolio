// src/App.jsx
import { lazy, Suspense, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  Outlet,
} from "react-router-dom";
import ErrorBoundary from "./component/error/ErrorBoundery";

// Scroll to top component
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

// Lazy imports
const LazyNavbar = lazy(() => import("./component/UI/navbar/Navbar"));
const LazyFooter = lazy(() => import("./component/UI/Pages/Footer"));
const LazyLoading = lazy(() => import("./component/spinner/Spinner"));
const LazyNotFound = lazy(() => import("./component/notFound/NotFound"));

// Page Components
const LazyHome = lazy(() => import("./component/UI/website"));
const LazyAbout = lazy(() => import("./component/UI/Pages/About"));
const LazyServices = lazy(() => import("./component/UI/Pages/Services"));
const LazyContact = lazy(() => import("./component/UI/Pages/Contacts"));
const LazyProjects = lazy(() => import("./component/UI/Pages/Projects"));
const LazySingleProject = lazy(
  () => import("./component/UI/Pages/SingleProduct"),
);
const LazyServiceDetail = lazy(
  () => import("./component/UI/Pages/ServicesDetails"),
);

// Layout component with Outlet
const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-950">
      <LazyNavbar />
      <main>
        <Outlet />
      </main>
      <LazyFooter />
    </div>
  );
};

// Custom hook for scroll to top
const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);
};

const AppContent = () => {
  useScrollToTop();

  return (
    <Routes>
      <Route element={<MainLayout />}>
        {/* Main Routes */}
        <Route path="/" element={<LazyHome />} />
        <Route path="/home" element={<LazyHome />} />
        <Route path="/about" element={<LazyAbout />} />
        <Route path="/services" element={<LazyServices />} />
        <Route path="/contact" element={<LazyContact />} />

        {/* Dynamic Service Detail Route - This handles all service URLs */}
        <Route path="/services/:serviceId" element={<LazyServiceDetail />} />

        {/* Projects nested routes */}
        <Route path="/projects">
          <Route index element={<LazyProjects />} />
          <Route path=":id" element={<LazySingleProject />} />
        </Route>

        {/* 404 Route - Catch all unmatched routes */}
        <Route path="*" element={<LazyNotFound />} />
      </Route>
    </Routes>
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