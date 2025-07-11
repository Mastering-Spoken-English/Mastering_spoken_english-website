import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.jpg";
import { useAuth } from "../context/AuthContext";

const Navbar = ({ setShowSignIn, setShowSignUp }) => {
  const { user, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200/50 shadow-lg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="relative group">
              <div className="h-16 w-32 overflow-hidden rounded-2xl shadow-md group-hover:shadow-xl transition-all duration-300">
                <img
                  src={logo}
                  alt="Logo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                SpeakMaster
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              to="/about-us"
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              About Us
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <a
              href="/#features"
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              Features
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="/#testimonials"
              className="relative text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
            >
              Testimonials
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {user ? (
              <>
                {user.role === "admin" ? (
                  <Link
                    to="/dashboard/admin"
                    className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Admin Dashboard</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                ) : (
                  <Link
                    to="/dashboard/student"
                    className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 overflow-hidden"
                  >
                    <span className="relative z-10">Student Dashboard</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </Link>
                )}
                <button
                  onClick={logout}
                  className="text-slate-700 hover:text-red-600 font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-red-50"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => setShowSignIn(true)}
                  className="text-slate-700 hover:text-blue-600 font-medium transition-colors duration-300 px-4 py-2 rounded-lg hover:bg-blue-50"
                >
                  Sign In
                </button>
                <button
                  onClick={() => setShowSignUp(true)}
                  className="group relative bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  <span className="relative z-10">Sign Up</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-lg p-2"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-slate-200">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about-us"
                className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                About Us
              </Link>
              <a
                href="/#features"
                className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Features
              </a>
              <a
                href="/#testimonials"
                className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Testimonials
              </a>

              {user ? (
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  {user.role === "admin" ? (
                    <Link
                      to="/dashboard/admin"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                    >
                      Admin Dashboard
                    </Link>
                  ) : (
                    <Link
                      to="/dashboard/student"
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium text-center"
                    >
                      Student Dashboard
                    </Link>
                  )}
                  <button
                    onClick={logout}
                    className="text-slate-700 hover:text-red-600 font-medium px-4 py-2 rounded-lg hover:bg-red-50 transition-colors"
                  >
                    Logout
                  </button>
                </div>
              ) : (
                <div className="flex flex-col space-y-2 pt-4 border-t border-slate-200">
                  <button
                    onClick={() => setShowSignIn(true)}
                    className="text-slate-700 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                  >
                    Sign In
                  </button>
                  <button
                    onClick={() => setShowSignUp(true)}
                    className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg font-medium"
                  >
                    Sign Up
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
