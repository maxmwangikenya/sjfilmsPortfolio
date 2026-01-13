// src/App.js
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/LandingPage/LandingPage';
import BrandCampaigns from './components/BrandCampaign/BrandCampaign';
import CooperativeEvents from './components/CooperativeEvents/CooperativeEvents'; // ← ADD THIS
import Footer from './components/Footer/Footer';
import MyTeam from './components/MyTeam/MyTeam';
import Documentaries from './components/Documentaries/Documentaries';
import AboutUs from './components/AboutUs/About';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/brand-campaigns" element={<BrandCampaigns />} />
          <Route path="/cooperative-events" element={<CooperativeEvents />} /> {/* ← ADD THIS */}
          <Route path="/my-team" element={<MyTeam />} />
          <Route path="/documentaries" element={<Documentaries />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;