import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Layout from './components/layout';
import Hero from './components/hero';
import Services from './components/Whatweoffer';
import Projects from './components/projects';
import FAQ from './components/faq';
import Contact from './components/contact';
import ServicesPage from './pages/ServicesPage';
import About from './components/about';

function AppContent() {
  const location = useLocation();
  const isServicePage = location.pathname.startsWith('/services/');

  return (
    <Layout isServicePage={isServicePage}>
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Services />
            <Projects />
            <About />
            <FAQ />
            <Contact />
          </>
        } />
        <Route path="/services/:serviceLabel" element={<ServicesPage />} />
      </Routes>
    </Layout>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

