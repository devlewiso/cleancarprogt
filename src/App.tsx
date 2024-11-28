import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Sections } from './components/Sections';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CookieConsent } from './components/CookieConsent';
import { Privacy } from './pages/Privacy';

function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Sections />
      <Contact />
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/politicas" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
        <CookieConsent />
      </div>
    </Router>
  );
}

export default App;