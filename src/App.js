// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import Footer from './components/Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load route components
const BrandCampaigns = lazy(() => import('./components/BrandCampaign/BrandCampaign'));
const CooperativeEvents = lazy(() => import('./components/CooperativeEvents/CooperativeEvents'));
const MyTeam = lazy(() => import('./components/MyTeam/MyTeam'));
const Documentaries = lazy(() => import('./components/Documentaries/Documentaries'));
const AboutUs = lazy(() => import('./components/AboutUs/About'));

// Loading component
const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '40px' }}>
    <p>Loading...</p>
  </div>
);

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/brand-campaigns" element={<BrandCampaigns />} />
            <Route path="/cooperative-events" element={<CooperativeEvents />} />
            <Route path="/my-team" element={<MyTeam />} />
            <Route path="/documentaries" element={<Documentaries />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default App;