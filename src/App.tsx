import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import ProtectedRoute from './components/ProtectedRoute';

// Pages
import Header from './components/Header';
import Hero from './components/Hero';
import WhyMarketInn from './components/WhyMarketInn';
import LivePreview from './components/LivePreview';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import LoginPage from './components/auth/LoginPage';
import SignupPage from './components/auth/SignupPage';
import ComingSoonDashboard from './components/dashboard/ComingSoonDashboard';
import AdminDashboard from './components/admin/AdminDashboard';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <WhyMarketInn />
      <LivePreview />
      <HowItWorks />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
};

const AppRoutes: React.FC = () => {
  const { user, profile } = useAuth();

  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="/comingsoon" element={<ComingSoonDashboard/>}/>
      <Route path="/dashboard" element={
        <ProtectedRoute>
          {profile?.email === 'admin@market-inn.com' ? (
            <AdminDashboard />
          ) : (
            <ComingSoonDashboard />
          )}
        </ProtectedRoute>
      } />
      <Route path="/admin" element={
        <ProtectedRoute adminOnly>
          <AdminDashboard />
        </ProtectedRoute>
      } />
      {/* Redirect any other routes to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;