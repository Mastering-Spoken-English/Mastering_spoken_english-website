import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import PaymentButton from "../shared/PaymentButton";
import ReferralInfo from "../shared/ReferralInfo";
import VideoPlayer from "../shared/VideoPlayer";

const StudentDashboard = () => {
  const { user } = useAuth();
  const [referralCode, setReferralCode] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">
            Student Dashboard
          </h1>
          <p className="text-slate-600 mb-8">
            Welcome back, {user?.name || "Student"}!
          </p>

          {!user?.paymentDone ? (
            <div className="bg-blue-50 rounded-2xl p-6 mb-8 border border-blue-200">
              <h2 className="text-xl font-bold text-blue-700 mb-4">
                Complete Payment to Access Course
              </h2>
              <p className="mb-4">
                Pay ₹199 to unlock the full "Mastering Spoken English" course
              </p>

              <div className="mb-4">
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  value={referralCode}
                  onChange={(e) => setReferralCode(e.target.value)}
                  className="w-full px-4 py-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Enter referral code"
                />
              </div>

              <PaymentButton
                amount={199}
                referralCode={referralCode}
                user={user}
              />
            </div>
          ) : (
            <div className="mb-8">
              <h2 className="text-xl font-bold text-slate-800 mb-4">
                Your Course Content
              </h2>
              <VideoPlayer />
            </div>
          )}

          {user?.referralCode && (
            <ReferralInfo referralCode={user.referralCode} />
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentDashboard;
