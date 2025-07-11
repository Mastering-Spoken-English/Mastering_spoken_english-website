import React, { useState } from "react";
import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import SignInModal from "./components/auth/SignInModel";
import SignUpModal from "./components/auth/SignUpModal";
import AdminDashboard from "./components/dashboard/AdminDashboard";
import StudentDashboard from "./components/dashboard/StudentDashboard";
import About from "./components/home/About";
import CourseContent from "./components/home/CourseContent";
import CTA from "./components/home/CTA";
import Features from "./components/home/Features";
import Footer from "./components/home/Footer";
import Hero from "./components/home/Hero";
import Navbar from "./components/home/Navbar";
import Testimonials from "./components/home/Testimonials";
import { AuthProvider, useAuth } from "./components/context/AuthContext";

const ProtectedRoute = ({ children, role }) => {
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/" />;
  }

  if (role && user.role !== role) {
    return <Navigate to="/" />;
  }

  return children;
};

const HomePage = () => {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar setShowSignIn={setShowSignIn} setShowSignUp={setShowSignUp} />
      <Hero />
      <Features />
      <About />
      <CourseContent />
      <Testimonials />
      <CTA />
      <Footer />

      <SignInModal
        isOpen={showSignIn}
        onClose={() => setShowSignIn(false)}
        onSwitchToSignUp={() => {
          setShowSignIn(false);
          setShowSignUp(true);
        }}
      />

      <SignUpModal
        isOpen={showSignUp}
        onClose={() => setShowSignUp(false)}
        onSwitchToSignIn={() => {
          setShowSignUp(false);
          setShowSignIn(true);
        }}
      />
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route
            path="/dashboard/student"
            element={
              <ProtectedRoute role="student">
                <StudentDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/dashboard/admin"
            element={
              <ProtectedRoute role="admin">
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
