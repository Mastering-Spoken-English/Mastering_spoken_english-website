import React, { useState } from "react";

const SignUpModal = ({ isOpen, onClose, onSwitchToSignIn }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic would go here
    console.log("Signing up with:", { name, email, password, role });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full mx-auto overflow-hidden shadow-xl">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-slate-800">Sign Up</h2>
            <button
              onClick={onClose}
              className="text-slate-500 hover:text-slate-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="John Doe"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                placeholder="Create a password"
                required
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-slate-700 mb-1">
                I am a
              </label>
              <div className="flex gap-4">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={role === "student"}
                    onChange={() => setRole("student")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span className="ml-2 text-slate-700">Student</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={role === "admin"}
                    onChange={() => setRole("admin")}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-slate-300"
                  />
                  <span className="ml-2 text-slate-700">Admin</span>
                </label>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
            >
              Create Account
            </button>
          </form>

          <div className="mt-4 text-center">
            <button
              onClick={onSwitchToSignIn}
              className="text-blue-600 font-medium hover:underline"
            >
              Already have an account? Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
